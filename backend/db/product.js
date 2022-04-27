const pool = require('./db').pool;

const products = new Map();

function add(data) {
  return new Promise((resolve) => {
    const product = {
      name: data.name,
      price: data.price,
      stock: data.stock,
      description: data.description,
      picture: data.picture,
      fk_Category: data.category
    }
    console.log(product);
    pool.query(`INSERT INTO product SET ?`, product, (err, result, fields) => {
      if (!err) {
        resolve(product);
      }
    })
  });
}

function get(){
  return new Promise((resolve) => {
    pool.query(`SELECT * FROM product ?`, (err, result, fields) => {
      if (!err) {
        if (result.length == 0) {
          resolve(null)
        }
        else {
          console.log(result)
          resolve(result);
        }
      }
    })
  });
}

module.exports = {
  add,
  get
}