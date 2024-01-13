require('dotenv').config();
const { Client } = require('pg');

const db = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database : process.env.DB
});

db.connect();

module.exports = db;