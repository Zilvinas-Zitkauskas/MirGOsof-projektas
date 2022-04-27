const { add: addproduct } = require('../db/product');

async function addProduct (req, res) {
  // const { name, price, stock, description, picture, category} = req.body;
  // if (!name || !price || !stock || !description || !category) {
  //   console.log(req.body);
  //   res.status(400).send({ error: 'All fields are required!' });
  //   return;
  // }
  await addproduct(req.body);
  res.sendStatus(204);
}

module.exports = {
  addProduct
}