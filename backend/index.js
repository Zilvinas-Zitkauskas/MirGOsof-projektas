const express = require('express')
const cors = require('cors')
const { readFile } = require('fs/promises');

const bodyParser = require('body-parser')
const environment = require('./environment')

const { forgotPassword } = require('./routes/forgotPassword')
const { register } = require('./routes/register')
const { login } = require('./routes/login')
const { updatePassword } = require('./routes/updatePassword')
const { resetPassword } = require('./routes/resetPassword')
const { addProduct } = require('./routes/addproduct')
const { get: getproduct } = require('./db/product.js');

const app = express()
const jsonParser = bodyParser.json();

app.use(cors({
  origin: environment.clientUrl
}))

app.post('/register', jsonParser, register)
app.post('/add-product', jsonParser, addProduct)

app.post('/forgotpassword', jsonParser, forgotPassword)

app.get('/resetpassword', resetPassword)

app.post('/updatepassword', jsonParser, updatePassword)

app.get('/products', async (req, res) => {
  const json = JSON.parse(
    await readFile('./db.json', 'utf-8')
  )
  res.status(200).send(json.products);
});

app.post('/login', jsonParser, login)

app.listen(3001)