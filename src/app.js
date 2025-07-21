const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.json());     
app.use(cors());            
app.use(helmet());            
app.use(morgan('dev'));       

app.use('/api/auth', authRoutes); 

app.get('/', (req, res) => {
  res.send('BookNest API is running!');
});

module.exports = app;
