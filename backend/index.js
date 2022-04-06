const express = require('express')
const cors = require('cors')
const { readFile } = require('fs/promises');

const fs = require("fs");
var data = fs.readFileSync("db.json/products");
var myObject = JSON.parse(data);

const bodyParser = require('body-parser')
const environment = require('./environment')

const app = express()
const jsonParser = bodyParser.json();

const registeredUsers = new Map();
registeredUsers.set('admin@admin.com', {
  fullName: 'admin',
  username: 'admin',
  email: 'admin@admin.com',
  emailConfirmation: 'admin@admin.com',
  password: 'admin',
  city: 'Kaunas',
  address: 'admin'
})

app.use(cors({
  origin: environment.clientUrl
}))

app.post('/register', jsonParser, function (req, res) {
  const { fullName, username, email, emailConfirmation, password, city, address } = req.body;
  if (!fullName || !username || !email || !emailConfirmation || !password || !city || !address) {
    res.status(400).send({ error: 'fullName, username, email, emailConfirmation, password, city and address are required!' });
    return;
  }
  if (email !== emailConfirmation) {
    res.status(422).send({ error: 'email and emailConfirmation must match!' });
    return;
  }
  if (registeredUsers.has(email)) {
    res.status(422).send({ error: 'email is already registered!' });
    return;
  }
  registeredUsers.set(email, req.body)
  res.sendStatus(200);
})

app.post('/add-product', jsonParser, function (req, res) {
  const { name, price, stock, shortDesc, description } = req.body;
  const id = Math.random().toString(36).substring(2) + Date.now().toString(36);
  let newData = {
          id,
          name,
          price,
          shortDesc,
          description,
          stock: stock || 0
  };
  var newData2 = JSON.stringify(myObject);
  fs.writeFile("data2.json", newData2, (err) => {
  // Error checking
  if (err) throw err;
  console.log("New data added");
});
  myObject.push(newData);
  res.sendStatus(200).send(json.products);
})

app.get('/products', async function (req, res) {
  const json = JSON.parse(
    await readFile('./db.json', 'utf-8')
  )
  res.status(200).send(json.products);
})

app.post('/login', jsonParser, function (req, res) {
  const { email, password } = req.body;
  const user = registeredUsers.get(email);
  if (!user || user.password !== password) {
    res.status(400).send({ error: 'invalid username or password!' })
    return;
  }
  res.status(200).send(user);
})

app.listen(3001)