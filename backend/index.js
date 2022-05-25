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
const { support } = require('./routes/support')

const { addProduct } = require('./routes/addproduct')
const { changePassword } = require('./routes/changePassword')
const { changeInformation } = require('./routes/changeInformation')
const { getProduct } = require('./routes/getproduct')

const { checkoutCart } = require('./routes/checkoutCart')

const {updateProduct} = require('./routes/updateProduct')
const {deleteProduct} = require('./routes/deleteProduct')


const app = express()
const jsonParser = bodyParser.json();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors({
  origin: environment.clientUrl
}))

app.post('/register', jsonParser, register)
app.post('/add-product', jsonParser, addProduct)

app.post('/forgotpassword', jsonParser, forgotPassword)

app.get('/resetpassword', resetPassword)

app.post('/updatepassword', jsonParser, updatePassword)
 
app.post('/changepassword', jsonParser, changePassword)
app.post('/changeinformation', jsonParser, changeInformation)
app.post('/updateproduct', jsonParser, updateProduct)
app.post('/deleteproduct', jsonParser, deleteProduct)
app.post('/support', jsonParser, support)
app.get('/products', getProduct)

app.post('/login', jsonParser, login)

app.post('/cart/checkout', jsonParser, checkoutCart)

app.listen(3001)