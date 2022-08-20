require('dotenv/config');

const { HOST, PASS, DATABASE, DB_USERNAME, DB_PORT } = process.env;

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": PASS,
    "database": DATABASE,
    "host": HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": DB_USERNAME,
    "password": PASS,
    "database": DATABASE,
    "host": HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": DB_USERNAME,
    "password": PASS,
    "database": DATABASE,
    "host": HOST,
    "dialect": "mysql"
  },
}
