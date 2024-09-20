const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "user",
});

pool
  .getConnection()
  .then((connection) => {
    console.log("Connected to the database as id " + connection.threadId);
    connection.release();
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err.stack);
  });

module.exports = pool;
