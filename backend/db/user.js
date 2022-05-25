const pool = require('./db').pool;

const registeredUsers = new Map();
registeredUsers.set('mirgostore@gmail.com', {
  "fullName": "admin",
  "username": "admin",
  "email": "mirgostore@gmail.com",
  "emailConfirmation": "mirgostore@gmail.com",
  "password": "admin",
  "city": "Kaunas",
  "address": "admin"
})

function add(user) {
  return new Promise((resolve) => {
    const client = {
      full_name: user.fullName,
      user_name: user.username,
      email: user.email,
      password: user.password,
      address: user.address,
      city: user.city,
    }
    pool.query(`INSERT INTO client SET ?`, client, (err, result, fields) => {
      if (!err) {
        resolve(user);
      }
    })
  });
}

function findByEmail(email) {
  return new Promise((resolve) => {
    pool.query(`SELECT * FROM client WHERE email = ?`, [email], (err, result, fields) => {
      if (!err) {
        if (result.length == 0) {
          resolve(null)
        } else {
          const resultUser = result[0];
          const user = {
            fullName: resultUser.full_name,
            username: resultUser.user_name,
            email: resultUser.email,
            password: resultUser.password,
            address: resultUser.address,
            city: resultUser.city
          }
          resolve(user);
        }
      }
    })
  });
}

function updatePassword(user) {
  return new Promise((resolve) => {
    pool.query(`UPDATE client SET password = ? WHERE email = ?`, [user.password, user.email], (err, result, fields) => {
      resolve(user);
    })
  })
}

function updateUser(user) {
  return new Promise((resolve) => {
    pool.query(`UPDATE client SET full_name = ?, user_name = ?, address = ?, city =?  WHERE email = ?`,
     [user.fullName, user.username, user.address, user.city, user.email], (err, result, fields) => {
      resolve(user);
    })
  })
}

module.exports = {
  add,
  updatePassword,
  findByEmail,
  updateUser
}