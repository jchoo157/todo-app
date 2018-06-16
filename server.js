const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
let app = express();

app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.send(path.resolve(__dirname, '/dist/index.html'))
});

app.listen(port);
console.log('Server started');
