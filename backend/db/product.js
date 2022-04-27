const pool = require('./db').pool;

function Addproduct(data) {
  return new Promise((resolve) => {
    const product = {
      name: data.name,
      price: data.price,
      stock: data.stock,
      description: data.description,
      picture: data.picture,
      fk_Category: data.category
    }
    //console.log(product);
    pool.query(`INSERT INTO product SET ?`, product, (err, result, fields) => {
      if (!err) {
        resolve(product);
      }
    })
  });
}

function Getproduct() {
  return new Promise((resolve) => {
    pool.query(`SELECT * FROM product;`, (err, results, fields) => {
      if (!err) {
        if (results.length == 0) {
          resolve(null)
          return;
        }
        resolve(results);
      }
    })
  });
}
function Updateproduct(data) {
  return new Promise((resolve) => {
    pool.query(`UPDATE product SET name = ? , price = ? , stock = ? , description = ? , picture = ? , fk_Category = ?  WHERE id = ?`,
     [data.name,data.price, data.stock, data.description, data.picture, data.fk_Category, data.id], (err, result, fields) => {
      console.log(result);
      resolve(result);
    })
  })
}

module.exports = {
  Addproduct,
  Getproduct,
  Updateproduct
}