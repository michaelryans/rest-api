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
    "username": "jfjofxcgxekgbk",
    "password": "4b7ffd1d79979f24ecbe1a5a9126f47fc6ef3dce6ba1d21890d4c68058766d4c",
    "database": "dd7uiugs5cddue",
    "host": "ec2-54-225-113-7.compute-1.amazonaws.com",
    "dialect": "postgres"
  }
}
