const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.get('/foo', (req, res) => {
  res.send('bar');
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.send(`Hello ${name}!`);
});

app.get('/kill', (req, res) => {
  process.exit(0);
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
