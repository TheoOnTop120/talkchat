begin;
select plan(25);

insert into auth.users (
  id, instance_id, aud, role, email, encrypted_password,
  email_confirmed_at, raw_app_meta_data, raw_user_meta_data,
  created_at, updated_at
)
values
  (
    '11111111-1111-4111-8111-111111111111', null, 'authenticated',
    'authenticated', 'confirmed@example.test', 'test', now(), '{}',
    '{"username":"Alice.One","display_name":"Alice Example","birth_date":"1990-01-01"}',
    now(), now()
  ),
  (
    '22222222-2222-4222-8222-222222222222', null, 'authenticated',
    'authenticated', 'unconfirmed@example.test', 'test', null, '{}',
    '{"username":"bob_2","display_name":"Bob Example","birth_date":"1995-01-01"}',
    now(), now()
  );

select is(
  (select username from public.profiles where id = '11111111-1111-4111-8111-111111111111'),
  'alice.one',
  'signup stores usernames in lowercase'
);
select is(
  (select display_name from public.profiles where id = '11111111-1111-4111-8111-111111111111'),
  'Alice Example',
  'signup stores the display name'
);
select is(
  (select raw_user_meta_data ? 'birth_date' from auth.users where id = '11111111-1111-4111-8111-111111111111'),
  false,
  'birth date is removed from editable auth metadata'
);
select is(
  (select birth_date::text from private.profile_private_data where user_id = '11111111-1111-4111-8111-111111111111'),
  '1990-01-01',
  'birth date is stored in the private schema'
);
select throws_ok(
  $$insert into auth.users (id, aud, role, email, encrypted_password, raw_user_meta_data)
    values ('33333333-3333-4333-8333-333333333333', 'authenticated', 'authenticated',
      'duplicate@example.test', 'test', '{"username":"ALICE.ONE","display_name":"Duplicate","birth_date":"1990-01-01"}')$$,
  '23505', null,
  'duplicate usernames are rejected case-insensitively'
);
select throws_ok(
  $$insert into auth.users (id, aud, role, email, encrypted_password, raw_user_meta_data)
    values ('44444444-4444-4444-8444-444444444444', 'authenticated', 'authenticated',
      'invalid@example.test', 'test', '{"username":"bad-name","display_name":"Invalid","birth_date":"1990-01-01"}')$$,
  '23514', null,
  'invalid username characters are rejected by the database'
);
select throws_ok(
  $$insert into auth.users (id, aud, role, email, encrypted_password, raw_user_meta_data)
    values ('55555555-5555-4555-8555-555555555555', 'authenticated', 'authenticated',
      'reserved@example.test', 'test', '{"username":"Admin","display_name":"Reserved","birth_date":"1990-01-01"}')$$,
  '23514', null,
  'reserved usernames are rejected by the database'
);
select throws_ok(
  $$insert into auth.users (id, aud, role, email, encrypted_password, raw_user_meta_data)
    values ('88888888-8888-4888-8888-888888888888', 'authenticated', 'authenticated',
      'reserved-route@example.test', 'test', '{"username":"introuvable","display_name":"Reserved Route","birth_date":"1990-01-01"}')$$,
  '23514', null,
  'frontend reserved names are also rejected by the database'
);
select throws_ok(
  $$insert into auth.users (id, aud, role, email, encrypted_password, raw_user_meta_data)
    values ('66666666-6666-4666-8666-666666666666', 'authenticated', 'authenticated',
      'underage@example.test', 'test', '{"username":"young1","display_name":"Underage","birth_date":"2015-01-01"}')$$,
  '23514', null,
  'users under 13 are rejected by the database'
);
select ok(
  has_index('public', 'profiles', 'profiles_username_ci_key'),
  'username case-insensitive uniqueness is enforced by an index'
);
select ok(
  not has_column('public', 'profiles', 'email')
  and not has_column('public', 'profiles', 'birth_date'),
  'public profiles contain neither email nor birth date'
);
select ok(
  not has_table_privilege('anon', 'public.profiles', 'select'),
  'anonymous users cannot search profiles'
);
select ok(
  not has_table_privilege('authenticated', 'private.profile_private_data', 'select'),
  'authenticated users cannot read private birth dates'
);
select ok(
  not has_column_privilege('authenticated', 'public.profiles', 'id', 'update'),
  'authenticated users cannot update profile ownership'
);

set local role postgres;
update public.profiles
set display_name = null
where id = '11111111-1111-4111-8111-111111111111';
select is(
  (select display_name from public.profiles where id = '11111111-1111-4111-8111-111111111111'),
  null,
  'legacy profile fixture has no display name column value'
);
update public.profiles as profile
set display_name = btrim(auth_user.raw_user_meta_data ->> 'display_name')
from auth.users as auth_user
where auth_user.id = profile.id
  and profile.display_name is null
  and char_length(btrim(auth_user.raw_user_meta_data ->> 'display_name')) between 2 and 40;
select is(
  (select display_name from public.profiles where id = '11111111-1111-4111-8111-111111111111'),
  'Alice Example',
  'legacy display name is recovered from auth metadata'
);

alter table public.profiles disable trigger validate_profile_username_before_write;
update public.profiles
set username = 'legacy_username_123456'
where id = '11111111-1111-4111-8111-111111111111';
alter table public.profiles enable trigger validate_profile_username_before_write;
select results_eq(
  $$update public.profiles
    set username = 'legacy_username_123456', display_name = 'Legacy Alice'
    where id = '11111111-1111-4111-8111-111111111111'
    returning username$$,
  $$values ('legacy_username_123456'::text)$$,
  'unchanged legacy username can be retained during profile updates'
);
select throws_ok(
  $$update public.profiles
    set username = 'legacy_username_654321'
    where id = '11111111-1111-4111-8111-111111111111'$$,
  '23514', null,
  'a legacy username cannot be changed to another username over 20 characters'
);
select throws_ok(
  $$insert into auth.users (id, aud, role, email, encrypted_password, raw_user_meta_data)
    values ('77777777-7777-4777-8777-777777777777', 'authenticated', 'authenticated',
      'toolong@example.test', 'test', '{"username":"a_very_long_username_123","display_name":"Too Long","birth_date":"1990-01-01"}')$$,
  '23514', null,
  'new accounts cannot claim legacy-length usernames'
);

set local role authenticated;
set local request.jwt.claim.sub = '11111111-1111-4111-8111-111111111111';
select results_eq(
  $$update public.profiles set display_name = 'Alice Updated'
    where id = '11111111-1111-4111-8111-111111111111'
    returning display_name$$,
  array['Alice Updated'],
  'a confirmed user can update their own profile'
);
select is(
  private.is_email_confirmed(), true,
  'confirmed users pass the database confirmation check'
);
set local request.jwt.claim.sub = '22222222-2222-4222-8222-222222222222';
select is_empty(
  $$select id from public.profiles where id = '11111111-1111-4111-8111-111111111111'$$,
  'unconfirmed users cannot search profiles'
);
select is(
  private.is_email_confirmed(), false,
  'unconfirmed users fail the database confirmation check'
);
select is_empty(
  $$update public.profiles set display_name = 'Stolen'
    where id = '11111111-1111-4111-8111-111111111111'
    returning id$$,
  'a different user cannot modify a profile'
);
set local role postgres;
select is(
  (select display_name from public.profiles where id = '11111111-1111-4111-8111-111111111111'),
  'Alice Updated',
  'the denied update leaves the owner profile unchanged'
);

select * from finish();
rollback;