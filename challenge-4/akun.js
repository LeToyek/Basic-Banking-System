const express = require('express');
const router = express.Router();
const pool = require('./database.js');

router.get('/akun', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM akun');
    client.release();
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing SQL query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/akun/:id', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM akun WHERE id = $1', [req.params.id]);
    client.release();
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error executing SQL query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
);

router.post('/akun', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('INSERT INTO akun (nama, email, password) VALUES ($1, $2, $3) RETURNING *', [req.body.nama, req.body.email, req.body.password]);
    client.release();
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error executing SQL query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
);

module.exports = router;
