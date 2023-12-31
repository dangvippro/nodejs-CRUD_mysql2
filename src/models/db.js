require("dotenv").config();
const mysql2 = require("mysql2/promise");

const conn = mysql2.createConnection({
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

module.exports = conn;