const pool = require('./db').pool;
const fs = require('fs')

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
    //console.log(product);
    pool.query(`INSERT INTO product SET ?`, product, (err, result, fields) => {
      if (!err) {
        resolve(product);
      }
    })
  });
}

function get(){
  return new Promise((resolve) => {
    pool.query(`SELECT * FROM product;`, (err, results, fields) => {
      if (!err) {
        if (results.length == 0) {
          resolve(null)
        }
        else {
          //results=JSON.parse(JSON.stringify(results))
          fs.writeFile('./database.json', JSON.stringify(results), (err) => {
            if (err) console.log('Error writing file:', err);
        })      
          resolve(200);
        }
      }
    })
  });
}

module.exports = {
  add,
  get
}