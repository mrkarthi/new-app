const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.end('Hello World!');
})

app.get('/about', (req, res) => {
  res.end('About Page');
});

app.get('/help', (req, res) => {
  res.end('Help page');
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
