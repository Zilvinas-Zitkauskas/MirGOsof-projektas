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

function add(email, user) {
  return new Promise((resolve) => {
    registeredUsers.set(email, user);
    resolve(user);
  });
}

function findByEmail(email) {
  return new Promise((resolve) => {
    const user = registeredUsers.get(email);
    resolve(user);
  });
}

function update(user) {
  return new Promise((resolve) => {
    registeredUsers.set(user.email, user);
    resolve(user);
  })
}

function reset(token) {
  return new Promise((resolve) => {
    const iterator = registeredUsers.values();
    let user = iterator.next();
    while (user.value && user.value.resetPasswordToken !== token) {
      user = iterator.next();
    }
    if (user.value && user.value.resetPasswordToken === token && Date.now() < user.value.resetPasswordExpires) {
      resolve(user.value.email);
      return;
    }
    resolve(null);
  })
}

module.exports = {
  add,
  update,
  findByEmail,
  reset
}