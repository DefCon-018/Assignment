const express = require('express');

const app = express();

app.listen(8000, (err) => {
  if (err) {
    console.log('error in setting up the server', err);
  }
  console.log('Server is up and running on port 8000');
});
