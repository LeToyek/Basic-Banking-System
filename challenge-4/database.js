const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'challenge3',
  password: 'handoko',
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;