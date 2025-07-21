const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Welcome to BookNest API!');
});

module.exports = app;
