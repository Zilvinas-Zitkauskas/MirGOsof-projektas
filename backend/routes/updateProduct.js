const { Updateproduct } = require('../db/product');

async function updateProduct (req, res) {
  await Updateproduct(req.body);
  res.sendStatus(204);
}

module.exports = {
    updateProduct
}