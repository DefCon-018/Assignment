const express = require('express');

const app = express();

//cors
const cors = require('cors');
app.use(cors());

//db
const db = require('./config/mongoose');

//route
app.use('/', require('./routes'));

//start server
app.listen(8000, (err) => {
  if (err) {
    console.log('error in setting up the server', err);
  }
  console.log('Server is up and running on port 8000');
});
