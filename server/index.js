const express = require('express');
// const db = require('./models/index');
const app = express();

// const { Pool } = require('pg');

// db.sequelize.authenticate()
//   .then(() => console.log('Database connection...'))
//   .catch(err => console.log('Error ' + err));

app.get('/', function (req, res) {
  res.send('Hello World!');
});



app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});