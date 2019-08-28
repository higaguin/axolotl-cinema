import dotenv from 'dotenv';

dotenv.config();

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
    "password": "24a675c34c1d1c5f6c312076b036b6048ec68e399ca6aaa82c7350b5b529b781",
    "database": "d487ir54gh8ssq",
    "host": "ec2-184-73-232-93.compute-1.amazonaws.com",
    "dialect": "postgres",
    "operatorsAliases": false
  }
}