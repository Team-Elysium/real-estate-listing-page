const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

let app = express();

let PORT = process.env.PORT || 3000;

let staticPath = path.join(__dirname, '../public');

////////////////////////////////////////
//  Apply Middleware and Serve Static Site

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/:id(\\d+)/', express.static(staticPath));

////////////////////////////////////////
//  API Call Redirection

// Carousel
app.get('/api/carousel/:id', (req, res) => {
  console.log('req.params:', req.params);
  res.sendStatus(200);
})
// Details

// Description

// Similar Listings

////////////////////////////////////////
//  Instantate Server
app.listen(PORT, (err) => {
  if (err) return console.log('Error starting server:', err);
  console.log('Succesfully started server on:', PORT);
})