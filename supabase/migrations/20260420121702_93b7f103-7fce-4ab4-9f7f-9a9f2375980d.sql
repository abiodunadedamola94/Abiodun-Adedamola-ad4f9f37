-- Visits table for tracking page views
create table public.visits (
  id uuid primary key default gen_random_uuid(),
  session_id text not null,
  path text not null,
  referrer text,
  user_agent text,
  language text,
  screen_size text,
  country text,
  created_at timestamptz not null default now()
);

create index visits_session_idx on public.visits(session_id);
create index visits_created_at_idx on public.visits(created_at desc);

alter table public.visits enable row level security;

create policy "Anyone can log a visit"
  on public.visits for insert
  to anon, authenticated
  with check (true);

-- Contact messages table
create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

create index contact_messages_created_at_idx on public.contact_messages(created_at desc);

alter table public.contact_messages enable row level security;

create policy "Anyone can submit a contact message"
  on public.contact_messages for insert
  to anon, authenticated
  with check (
    char_length(full_name) between 1 and 100
    and char_length(email) between 3 and 255
    and char_length(message) between 1 and 5000
  );