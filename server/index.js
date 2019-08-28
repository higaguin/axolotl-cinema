const express = require('express');
// const db = require('./models/index');
const expressGraphQL = require('express-graphql');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');

const app = express();

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

// const { Pool } = require('pg');

// db.sequelize.authenticate()
//   .then(() => console.log('Database connection...'))
//   .catch(err => console.log('Error ' + err));

app.get('/', function (req, res) {
  res.send('Hello World!');
});



app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 5000!');
});