const mysql = require('mysql2')
require('dotenv').config()

const db = mysql.createConnection({
    host: "sql.freedb.tech",
    user: "freedb_hanifah",
    password: "@y*vxS??!H#9&6D",
    database: "freedb_db_trashtocash"
})

db.connect(err => {
    if (err) {
        console.log("Database connection failed:", err)
    } else {
        console.log("Database connected!")
    }
});

module.exports = db