const { Client } = require("pg");
const { PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD } = process.env;

const dbOptions = {
  host: PG_HOST,
  port: Number(PG_PORT),
  database: PG_DATABASE,
  user: PG_USERNAME,
  password: PG_PASSWORD,
  ssl: { rejectUnauthorized: false },
  connectionTimeoutMillis: 5000,
  idle_in_transaction_session_timeout: 5000
};

export const client = new Client(dbOptions);
