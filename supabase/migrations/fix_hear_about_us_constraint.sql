-- Run in Supabase SQL Editor if the waitlist table already exists.
-- Updates hear_about_us to accept Facebook, Instagram, LinkedIn, Google.

ALTER TABLE waitlist
  DROP CONSTRAINT IF EXISTS waitlist_hear_about_us_check;

ALTER TABLE waitlist
  ADD CONSTRAINT waitlist_hear_about_us_check CHECK (
    hear_about_us IN ('Facebook', 'Instagram', 'LinkedIn', 'Google', 'bouche-a-oreille', 'publicite', 'evenement', 'article', 'autre')
    OR hear_about_us IS NULL
    OR hear_about_us = ''
  );
