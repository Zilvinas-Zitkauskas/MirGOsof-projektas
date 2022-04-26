const { add: addUser, findByEmail } = require('../db/user');

async function register (req, res) {
  const { fullName, username, email, emailConfirmation, password, city, address } = req.body;
  if (!fullName || !username || !email || !emailConfirmation || !password || !city || !address) {
    res.status(400).send({ error: 'All fields are required!' });
    return;
  }
  if (email !== emailConfirmation) {
    res.status(422).send({ error: 'Email and confirm email must match!' });
    return;
  }
  if (await findByEmail(email)) {
    res.status(422).send({ error: 'Email is already registered!' });
    return;
  }
  await addUser(email, req.body);
  res.sendStatus(204);
}

module.exports = {
  register,
}