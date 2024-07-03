const mysql = require("mysql2");
const dotenv = require("dotenv").config();

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "blog",
  password: process.env.PASSWORD,
});

module.exports = pool.promise();
