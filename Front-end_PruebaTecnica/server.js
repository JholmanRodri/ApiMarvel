
const express = require('express');
const request = require('request');
const app = express();

// Configura las cabeceras CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Endpoint para el proxy
app.get('/proxy', (req, res) => {
  const url = req.query.url;
  request(url).pipe(res);
});

// Inicia el servidor
app.listen(3000, () => {
  console.log('El servidor proxy está corriendo en http://localhost:3000');
});
