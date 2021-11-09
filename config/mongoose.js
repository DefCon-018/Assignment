const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ensvee');

const db = mongoose.connection;

// on getting error
db.on('error', console.error.bind(console, 'connection error'));

db.once('open', () => {
  console.log('Successfully connected to database');
});

module.exports = db;
