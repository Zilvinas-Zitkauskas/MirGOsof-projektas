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

const { addProduct } = require('./routes/addProduct')
const { changePassword } = require('./routes/changePassword')
const { getProduct } = require('./routes/getProduct')

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
 
app.post('/changepassword', jsonParser, changePassword)

app.post('/support', jsonParser, support)
app.get('/products', getProduct)

app.post('/login', jsonParser, login)

app.listen(3001)