const express = require('express')
const cors = require('cors')
const { readFile } = require('fs/promises');

// const fs = require("fs");
// var data = fs.readFileSync("db.json/products");
// var myObject = JSON.parse(data);

const bodyParser = require('body-parser')
const environment = require('./environment')

const { forgotPassword } = require('./routes/forgotPassword')
const { register } = require('./routes/register')
const { login } = require('./routes/login')
const { updatePassword } = require('./routes/updatePassword')
const { resetPassword } = require('./routes/resetPassword')
const { changePassword } = require('./routes/changePassword')

const app = express()
const jsonParser = bodyParser.json();

app.use(cors({
  origin: environment.clientUrl
}))

app.post('/register', jsonParser, register)


// app.post('/add-product', jsonParser, function (req, res) {
//   const { name, price, stock, shortDesc, description } = req.body;
//   const id = Math.random().toString(36).substring(2) + Date.now().toString(36);
//   let newData = {
//           id,
//           name,
//           price,
//           shortDesc,
//           description,
//           stock: stock || 0
//   };
//   var newData2 = JSON.stringify(myObject);
//   fs.writeFile("data2.json", newData2, (err) => {
//   // Error checking
//   if (err) throw err;
//   console.log("New data added");
// });
//   myObject.push(newData);
//   res.sendStatus(200).send(json.products);

app.post('/forgotpassword', jsonParser, forgotPassword)

app.get('/resetpassword', resetPassword)

app.post('/updatepassword', jsonParser, updatePassword)

app.post('/changepassword', jsonParser, changePassword)

app.get('/products', async function (req, res) {
  const json = JSON.parse(
    await readFile('./db.json', 'utf-8')
  )
  res.status(200).send(json.products);
})

app.post('/login', jsonParser, login)

app.listen(3001)