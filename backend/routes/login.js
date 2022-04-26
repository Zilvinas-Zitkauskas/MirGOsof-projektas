const { findByEmail } = require('../db/user');

module.exports = {
  login: async function (req, res) {
    const { email, password } = req.body;
    const user = await findByEmail(email);
    if (!user || user.password !== password) {
      res.status(400).send({ error: 'Invalid username or password!' })
      return;
    }
    res.status(200).send(user);
  }
}