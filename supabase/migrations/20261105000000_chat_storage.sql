begin;

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  username text not null unique
    check (username = lower(username) and username ~ '^[a-z0-9_]{3,30}$'),
  avatar_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.conversations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now()
);

create table if not exists public.conversation_participants (
  conversation_id uuid not null references public.conversations (id) on delete cascade,
  user_id uuid not null references public.profiles (id) on delete cascade,
  joined_at timestamptz not null default now(),
  primary key (conversation_id, user_id)
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references public.conversations (id) on delete cascade,
  sender_id uuid not null references public.profiles (id) on delete restrict,
  content text not null check (length(btrim(content)) between 1 and 4000),
  created_at timestamptz not null default now()
);

create index if not exists messages_conversation_created_at_idx
  on public.messages (conversation_id, created_at);

create or replace function public.create_profile_for_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  base_username text;
  candidate text;
  suffix integer := 0;
begin
  base_username := lower(regexp_replace(
    coalesce(new.raw_user_meta_data ->> 'display_name', ''),
    '[^a-zA-Z0-9_]+',
    '_',
    'g'
  ));
  base_username := trim(both '_' from base_username);

  if length(base_username) < 3 then
    base_username := 'user_' || left(replace(new.id::text, '-', ''), 8);
  end if;
  base_username := left(base_username, 30);

  loop
    candidate := case
      when suffix = 0 then base_username
      else left(base_username, 30 - length(suffix::text) - 1) || '_' || suffix::text
    end;

    begin
      insert into public.profiles (id, username)
      values (new.id, candidate);
      exit;
    exception when unique_violation then
      suffix := suffix + 1;
    end;
  end loop;

  return new;
end;
$$;

revoke all on function public.create_profile_for_new_user() from public, anon, authenticated;

drop trigger if exists create_profile_after_signup on auth.users;
create trigger create_profile_after_signup
  after insert on auth.users
  for each row execute function public.create_profile_for_new_user();

create or replace function public.is_participant(target_conversation_id uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.conversation_participants as participant
    where participant.conversation_id = target_conversation_id
      and participant.user_id = (select auth.uid())
  );
$$;

revoke all on function public.is_participant(uuid) from public, anon;
grant execute on function public.is_participant(uuid) to authenticated;

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
  if current_user_id is null then
    raise exception 'Authentication required' using errcode = '28000';
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

revoke all on function public.get_or_create_direct_conversation(uuid) from public, anon;
grant execute on function public.get_or_create_direct_conversation(uuid) to authenticated;

alter table public.profiles enable row level security;
alter table public.conversations enable row level security;
alter table public.conversation_participants enable row level security;
alter table public.messages enable row level security;

drop policy if exists profiles_read_authenticated on public.profiles;
create policy profiles_read_authenticated
  on public.profiles for select to authenticated
  using ((select auth.uid()) is not null);

drop policy if exists profiles_update_self on public.profiles;
create policy profiles_update_self
  on public.profiles for update to authenticated
  using (id = (select auth.uid()))
  with check (id = (select auth.uid()));

drop policy if exists conversations_read_participants on public.conversations;
create policy conversations_read_participants
  on public.conversations for select to authenticated
  using (public.is_participant(id));

drop policy if exists participants_read_conversation_members on public.conversation_participants;
create policy participants_read_conversation_members
  on public.conversation_participants for select to authenticated
  using (public.is_participant(conversation_id));

drop policy if exists messages_read_participants on public.messages;
create policy messages_read_participants
  on public.messages for select to authenticated
  using (public.is_participant(conversation_id));

drop policy if exists messages_insert_participants on public.messages;
create policy messages_insert_participants
  on public.messages for insert to authenticated
  with check (
    sender_id = (select auth.uid())
    and public.is_participant(conversation_id)
  );

revoke all on public.profiles, public.conversations,
  public.conversation_participants, public.messages from anon, authenticated;
grant select on public.profiles to authenticated;
grant update (username, avatar_url) on public.profiles to authenticated;
grant select on public.conversations, public.conversation_participants to authenticated;
grant select, insert on public.messages to authenticated;

do $$
begin
  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'messages'
  ) then
    alter publication supabase_realtime add table public.messages;
  end if;
end;
$$;

commit;