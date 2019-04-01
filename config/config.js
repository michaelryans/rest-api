require('dotenv').config()
module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": "rest-api",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.HEROKU_USERNAME,
    "password": process.env.HEROKU_PASSWORD,
    "database": "dd7uiugs5cddue",
    "host": "ec2-54-225-113-7.compute-1.amazonaws.com",
    "dialect": "postgres"
  }
}
