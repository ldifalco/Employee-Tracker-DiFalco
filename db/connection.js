const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "employee_db",
  password: "Apple22."
},

console.log(`Connected to Employee Tracking Database!`)
)

module.exports = connection;