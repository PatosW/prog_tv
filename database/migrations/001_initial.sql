-- ─────────────────────────────────────────────────────────────────────────────
-- TV Guide Israel — Initial schema
-- ─────────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS channels (
  id            SERIAL      PRIMARY KEY,
  slug          VARCHAR(60) UNIQUE NOT NULL,
  name          VARCHAR(120) NOT NULL,
  category      VARCHAR(20)  NOT NULL,              -- 'fr' | 'be' | 'il'
  subcategories TEXT[]       NOT NULL DEFAULT '{}', -- e.g. ['fr','sport']
  logo_bg       VARCHAR(7)   NOT NULL DEFAULT '#185FA5',
  logo_fg       VARCHAR(7)   NOT NULL DEFAULT '#FFFFFF',
  sort_order    SMALLINT     NOT NULL DEFAULT 0,
  active        BOOLEAN      NOT NULL DEFAULT true,
  created_at    TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- ─────────────────────────────────────────────────────────────────────────────
-- Recurring daily schedule.
-- start_time is in ISRAEL time (UTC+3).
-- day_of_week: -1 = every day, 0 = Sunday … 6 = Saturday (PostgreSQL DOW).
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS programs (
  id           SERIAL       PRIMARY KEY,
  channel_id   INTEGER      NOT NULL REFERENCES channels(id) ON DELETE CASCADE,
  title        VARCHAR(220) NOT NULL,
  description  TEXT,
  genre        VARCHAR(50),
  badge        VARCHAR(20),                         -- 'live' | 'new' | 'film' | 'doc' | 'sport'
  start_time   TIME         NOT NULL,
  day_of_week  SMALLINT     NOT NULL DEFAULT -1,
  created_at   TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- ─────────────────────────────────────────────────────────────────────────────
-- Anonymous users identified by a device UUID (generated client-side).
-- No passwords, no email. Cross-device sync is a v2 feature.
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS users (
  id         SERIAL       PRIMARY KEY,
  device_id  VARCHAR(128) UNIQUE NOT NULL,
  created_at TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS favorites (
  user_id    INTEGER NOT NULL REFERENCES users(id)    ON DELETE CASCADE,
  channel_id INTEGER NOT NULL REFERENCES channels(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, channel_id)
);

-- ─────────────────────────────────────────────────────────────────────────────
-- Indexes
-- ─────────────────────────────────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_programs_channel    ON programs(channel_id);
CREATE INDEX IF NOT EXISTS idx_programs_time       ON programs(start_time);
CREATE INDEX IF NOT EXISTS idx_programs_dow        ON programs(day_of_week);
CREATE INDEX IF NOT EXISTS idx_channels_cat        ON channels(category);
CREATE INDEX IF NOT EXISTS idx_channels_subs       ON channels USING gin(subcategories);
CREATE INDEX IF NOT EXISTS idx_favorites_user      ON favorites(user_id);
CREATE INDEX IF NOT EXISTS idx_users_device        ON users(device_id);
