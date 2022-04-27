const { Addproduct } = require('../db/product');

async function addProduct (req, res) {
  await Addproduct(req.body);
  res.sendStatus(204);
}

module.exports = {
  addProduct
}