import pg from 'pg';
import 'dotenv/config';

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  max: 10,
  idleTimeoutMillis: 30_000,
  connectionTimeoutMillis: 3_000,
});

pool.on('error', (err) => {
  console.error('[db] unexpected client error', err.message);
});

export const query  = (text, params) => pool.query(text, params);
export const connect = () => pool.connect();
export default pool;
