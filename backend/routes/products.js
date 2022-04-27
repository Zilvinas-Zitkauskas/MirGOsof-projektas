const { get: getproduct } = require('../db/product');
async function getProduct (req, res) {
    try {
        const pool = await sql.connect(pool);
        const sqlQuery = 'SELECT * FROM product';
        const result = await pool.request().query(sqlQuery);
        return result.recordset;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getProduct
  }