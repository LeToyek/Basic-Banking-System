const express = require('express');
const app = express();
const port = 3000;
const akunRouter = require('./akun'); // Replace with your route file
const nasabahRouter = require('./nasabah'); // Replace with your route file
const transaksiRouter = require('./transaksi'); // Replace with your route file

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.use('/api',akunRouter,nasabahRouter,transaksiRouter); // Mount the users route at /api/users


