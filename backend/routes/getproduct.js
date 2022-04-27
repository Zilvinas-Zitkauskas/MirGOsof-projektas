const { getProduct } = require('../db/product');

async function getProduct(req, res) {
  const products = await getProduct();
  res.status(200).send(products);
}

module.exports = {
  getProduct
}