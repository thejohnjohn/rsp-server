const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`Hello, world on port ${port}`);
});

app.post('/:hand', (req, res) => {
  res.send(`You choose ${req.params.hand}`);
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
