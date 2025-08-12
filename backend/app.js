// backend/app.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from API!' });
});

module.exports = app;
