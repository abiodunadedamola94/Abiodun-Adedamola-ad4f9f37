drop policy "Anyone can log a visit" on public.visits;

create policy "Anyone can log a visit"
  on public.visits for insert
  to anon, authenticated
  with check (
    char_length(session_id) between 1 and 64
    and char_length(path) between 1 and 500
    and (referrer is null or char_length(referrer) <= 1000)
    and (user_agent is null or char_length(user_agent) <= 500)
    and (language is null or char_length(language) <= 20)
    and (screen_size is null or char_length(screen_size) <= 20)
    and (country is null or char_length(country) <= 100)
  );