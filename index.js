const express = require('express');

const app = express();

app.use(express.urlencoded());

// passport jwt setup
const passport = require('passport');
const JWTStrategy = require('./config/passport-jwt-strategy');

//cors
const cors = require('cors');
app.use(cors());

//db
const db = require('./config/mongoose');

//route
app.use('/', require('./routes'));

//starting server
app.listen(8000, (err) => {
  if (err) {
    console.log('error in setting up the server', err);
  }
  console.log('Server is up and running on port 8000');
});
