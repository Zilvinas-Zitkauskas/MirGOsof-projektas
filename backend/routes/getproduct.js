const { Getproduct } = require('../db/product');

async function getProduct(req, res) {
  const products = await Getproduct();
  res.status(200).send(products);
}

module.exports = {
  getProduct
}