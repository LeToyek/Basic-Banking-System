const express = require('express');
require('dotenv').config();
const router = require('./routes/auth.routes');

const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.json());
app.use('/auth', router);

// app.get('/protected', authenticateToken, (req, res) => {
//   res.json({ message: 'This is a protected route' });
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
