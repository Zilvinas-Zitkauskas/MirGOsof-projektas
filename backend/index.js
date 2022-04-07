const express = require('express')
const cors = require('cors')
const { readFile } = require('fs/promises');

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
    res.status(400).send({ error: 'All fields are required!' });
    return;
  }
  if (email !== emailConfirmation) {
    res.status(422).send({ error: 'Email and confirm email must match!' });
    return;
  }
  if (registeredUsers.has(email)) {
    res.status(422).send({ error: 'Email is already registered!' });
    return;
  }
  registeredUsers.set(email, req.body)
  res.sendStatus(200);
})

app.post('/forgotpassword', jsonParser, function (req, res) {
  const { email } = req.body;
  if (!registeredUsers.has(email)) {
    res.status(422).send({ error: 'Email not registered!' })
    return;
  }
  res.sendStatus(200);
})

app.post('/resetpassword', jsonParser, function (req, res) {
  const { newPassword, confirmPassword } = req.body;
  if (newPassword !== confirmPassword) {
    res.status(400).send({ error: 'Password and confirm password must match!' })
    return;
  }
  res.sendStatus(200);
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
    res.status(400).send({ error: 'Invalid username or password!' })
    return;
  }
  res.status(200).send(user);
})

app.listen(3001)