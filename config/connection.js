const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createPool({
    connectionLimit: 10, // Max 10 koneksi yang dapat dibuka
    host: process.env.DB_HOST,      // Gunakan variabel lingkungan untuk host
    user: process.env.DB_USER,      // Gunakan variabel lingkungan untuk user
    password: process.env.DB_PASS,  // Gunakan variabel lingkungan untuk password
    database: process.env.DB_NAME   // Gunakan variabel lingkungan untuk nama database
});

db.getConnection((err, connection) => {
    if (err) {
        console.log("Database connection failed:", err);
    } else {
        console.log("Database connected!");
        connection.release(); // Setelah koneksi berhasil, kita lepas untuk digunakan lagi
    }
});

module.exports = db;
