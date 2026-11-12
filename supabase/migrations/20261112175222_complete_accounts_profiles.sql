begin;

create schema if not exists private;
revoke all on schema private from public, anon, authenticated;
grant usage on schema private to authenticated;

alter table public.profiles
	add column if not exists display_name text;

update public.profiles as profile
set display_name = btrim(auth_user.raw_user_meta_data ->> 'display_name')
from auth.users as auth_user
where auth_user.id = profile.id
	and profile.display_name is null
	and char_length(btrim(auth_user.raw_user_meta_data ->> 'display_name')) between 2 and 40;

alter table public.profiles
	drop constraint if exists profiles_username_check;
alter table public.profiles
	drop constraint if exists profiles_username_key;
alter table public.profiles
	drop constraint if exists profiles_username_format_check;
alter table public.profiles
	add constraint profiles_display_name_check
	check (
		display_name is null
		or char_length(btrim(display_name)) between 2 and 40
	) not valid;

create unique index if not exists profiles_username_ci_key
	on public.profiles (lower(username));

create or replace function public.validate_profile_username()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
	if new.username = lower(new.username)
		and new.username ~ '^[a-z0-9._]{3,20}$'
		and new.username not in (
			'about', 'admin', 'api', 'help', 'inbox', 'intrble', 'introuvable',
			'legal', 'login', 'null', 'profile', 'register', 'root', 'security',
			'settings', 'support', 'talkchat', 'terms', 'verify'
		) then
		return new;
	end if;

	if tg_op = 'UPDATE'
		and new.username is not distinct from old.username
		and old.username ~ '^[a-z0-9_]{21,30}$' then
		return new;
	end if;

	raise exception 'username must be 3 to 20 letters, numbers, dots, or underscores'
		using errcode = '23514';
end;
$$;
revoke all on function public.validate_profile_username() from public, anon, authenticated;

drop trigger if exists validate_profile_username_before_write on public.profiles;
create trigger validate_profile_username_before_write
	before insert or update of username on public.profiles
	for each row execute function public.validate_profile_username();

create table if not exists private.profile_private_data (
	user_id uuid primary key references auth.users (id) on delete cascade,
	birth_date date not null
);
alter table private.profile_private_data enable row level security;
revoke all on private.profile_private_data from public, anon, authenticated;

create or replace function private.is_email_confirmed()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
	select exists (
		select 1
		from auth.users as auth_user
		where auth_user.id = (select auth.uid())
			and auth_user.email_confirmed_at is not null
	);
$$;
revoke all on function private.is_email_confirmed() from public, anon;
grant execute on function private.is_email_confirmed() to authenticated;

create or replace function public.create_profile_for_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
	new_username text;
	new_display_name text;
	birth_date_text text;
	birth_date_value date;
begin
	new_username := lower(btrim(coalesce(new.raw_user_meta_data ->> 'username', '')));
	new_display_name := btrim(coalesce(new.raw_user_meta_data ->> 'display_name', ''));
	birth_date_text := coalesce(new.raw_user_meta_data ->> 'birth_date', '');

	if new_username !~ '^[a-z0-9._]{3,20}$' then
		raise exception 'username must contain 3 to 20 letters, numbers, dots, or underscores'
			using errcode = '23514';
	end if;
	if new_username in (
		'about', 'access-denied', 'admin', 'api', 'chat', 'community', 'error',
		'features', 'forgot-password', 'help', 'inbox', 'legal', 'login', 'null',
		'intrble', 'introuvable', 'not-found', 'profile', 'report', 'register',
		'reset-password', 'root', 'security', 'settings', 'support', 'talkchat',
		'terms', 'unavailable', 'verify', 'verify-email'
	) then
		raise exception 'username is reserved' using errcode = '23514';
	end if;
	if char_length(new_display_name) not between 2 and 40 then
		raise exception 'display name must contain 2 to 40 characters'
			using errcode = '23514';
	end if;
	if birth_date_text !~ '^\d{4}-\d{2}-\d{2}$' then
		raise exception 'birth_date must be a valid ISO date' using errcode = '23514';
	end if;

	begin
		birth_date_value := birth_date_text::date;
	exception when others then
		raise exception 'birth_date must be a valid ISO date' using errcode = '23514';
	end;

	if to_char(birth_date_value, 'YYYY-MM-DD') <> birth_date_text then
		raise exception 'birth_date must be a valid ISO date' using errcode = '23514';
	end if;
	if birth_date_value > current_date
		or age(current_date, birth_date_value) < interval '13 years' then
		raise exception 'birth_date must meet the minimum age of 13'
			using errcode = '23514';
	end if;

	insert into public.profiles (id, username, display_name)
	values (new.id, new_username, new_display_name);

	insert into private.profile_private_data (user_id, birth_date)
	values (new.id, birth_date_value);

	update auth.users
	set raw_user_meta_data = raw_user_meta_data - 'birth_date'
	where id = new.id;

	return new;
end;
$$;
revoke all on function public.create_profile_for_new_user() from public, anon, authenticated;

create or replace function public.is_participant(target_conversation_id uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
	select private.is_email_confirmed() and exists (
		select 1
		from public.conversation_participants as participant
		where participant.conversation_id = target_conversation_id
			and participant.user_id = (select auth.uid())
	);
$$;

create or replace function public.get_or_create_direct_conversation(other_user_id uuid)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
	current_user_id uuid := auth.uid();
	direct_conversation_id uuid;
begin
	if current_user_id is null or not private.is_email_confirmed() then
		raise exception 'Confirmed email required' using errcode = '28000';
	end if;
	if other_user_id is null or other_user_id = current_user_id then
		raise exception 'A different user is required' using errcode = '22023';
	end if;
	if not exists (
		select 1 from public.profiles as profile where profile.id = other_user_id
	) then
		raise exception 'User not found' using errcode = '22023';
	end if;

	perform pg_advisory_xact_lock(hashtextextended(
		least(current_user_id::text, other_user_id::text) || ':' ||
			greatest(current_user_id::text, other_user_id::text),
		0
	));

	select mine.conversation_id
	into direct_conversation_id
	from public.conversation_participants as mine
	join public.conversation_participants as theirs
		on theirs.conversation_id = mine.conversation_id
	where mine.user_id = current_user_id
		and theirs.user_id = other_user_id
		and (
			select count(*)
			from public.conversation_participants as all_participants
			where all_participants.conversation_id = mine.conversation_id
		) = 2
	limit 1;

	if direct_conversation_id is not null then
		return direct_conversation_id;
	end if;

	insert into public.conversations default values
	returning id into direct_conversation_id;

	insert into public.conversation_participants (conversation_id, user_id)
	values
		(direct_conversation_id, current_user_id),
		(direct_conversation_id, other_user_id);

	return direct_conversation_id;
end;
$$;

drop policy if exists profiles_read_authenticated on public.profiles;
create policy profiles_read_authenticated
	on public.profiles for select to authenticated
	using (private.is_email_confirmed());

drop policy if exists profiles_update_self on public.profiles;
create policy profiles_update_self
	on public.profiles for update to authenticated
	using (id = (select auth.uid()) and private.is_email_confirmed())
	with check (id = (select auth.uid()) and private.is_email_confirmed());

revoke update on public.profiles from authenticated;
revoke update (username, avatar_url) on public.profiles from authenticated;
grant update (username, display_name, avatar_url) on public.profiles to authenticated;

commit;
