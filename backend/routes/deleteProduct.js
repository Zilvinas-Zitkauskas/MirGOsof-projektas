const { Deleteproduct } = require('../db/product');

async function deleteProduct (req, res) {
  await Deleteproduct(req.body);
  res.sendStatus(204);
}

module.exports = {
    deleteProduct
}