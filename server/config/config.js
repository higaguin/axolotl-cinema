module.exports = 
{
  "development": {
    "username": "postgres",
    "password": "postgres_password",
    "database": "postgres",
    "host": "postgres",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "test": {
    "username": "postgres",
    "password": "postgres_password",
    "database": "postgres",
    "host": "postgres",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "production": {
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DATABASE,
    "host": process.env.POSTGRES_HOST,
    "dialect": "postgres",
    "operatorsAliases": false
  }
}