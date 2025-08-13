const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Definimos los orígenes permitidos (dev + producción)
const allowedOrigins = [
  'http://localhost:5173',                 
  'https://complementary-assessment-1.onrender.com' 
];

app.use(cors({
  origin: function(origin, callback){
    // permitir solicitudes sin origen (como curl o postman)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'El CORS policy no permite este origen: ' + origin;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from API!' });
});

module.exports = app;
