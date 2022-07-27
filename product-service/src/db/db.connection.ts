const { Client } = require('pg');
const { PG_DATABASE, PG_HOST, PG_PASSWORD, PG_PORT, PG_USERNAME } = process.env;

const dbOptions = {
  host: PG_HOST,
  port: PG_PORT,
  database: PG_DATABASE,
  user: PG_USERNAME,
  password: PG_PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
  connectionTimeoutMillis: 10000,
};

export default function initDB() {
  try {
    const client = new Client(dbOptions);
    client.connect();
    console.log("DB connected:::::");
    return client;
  } catch (err) {
    console.error("ERROR: DB not connected:::::", err.message);
    throw new Error(err)
  }
}

export const client = initDB();
