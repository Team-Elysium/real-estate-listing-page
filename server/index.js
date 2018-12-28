const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

////////////////////////////////////////
//  Remote Server Endpoints
const service_urls = require('../service_urls.json');

let app = express();

let PORT = process.env.PORT || 3000;

let staticPath = path.join(__dirname, '../public');

////////////////////
//  Apply Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());


/////////////////////
//  Serve Static Site
app.use('/:id(\\d+)/', express.static(staticPath));

////////////////////////////////////////
//  API Call Redirection

// Carousel
app.get(service_urls.carousel.LOCAL_API_TARGET, (req, res) => {
  const itemId = req.params.id;
  axios.get(service_urls.carousel.API_URL + itemId)
  .then((result) => {
    res.json(result.data);
  })
  .catch((err) => {
    console.log('Error fetching from carousel API:',err);
    res.sendStatus(500);
  })
})

// Details

// Description

// Similar Listings


// Catch any other requests
app.use('/', express.static(staticPath));

////////////////////////////////////////
//  Instantate Server
app.listen(PORT, (err) => {
  if (err) return console.log('Error starting server:', err);
  console.log('Succesfully started server on:', PORT);
})