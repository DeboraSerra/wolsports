require('dotenv/config');

const { HOST, PASS, DATABASE, DB_USERNAME, DB_PORT } = process.env;

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": PASS,
    "database": DATABASE,
    "host": HOST,
    "port": DB_PORT,
    "dialect": "postgres"
  },
  "test": {
    "username": DB_USERNAME,
    "password": PASS,
    "database": DATABASE,
    "host": HOST,
    "port": DB_PORT,
    "dialect": "postgres"
  },
  "production": {
    "username": DB_USERNAME,
    "password": PASS,
    "database": DATABASE,
    "host": HOST,
    "port": DB_PORT,
    "dialect": "postgres"
  },
}
