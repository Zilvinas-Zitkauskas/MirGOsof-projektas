const mysql = require('mysql')

let pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'mirgostore'
});

module.exports = {
  pool,
}