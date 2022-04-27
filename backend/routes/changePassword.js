const { findByEmail, update } = require('../db/user');

module.exports = {
  changePassword: async function (req, res) {
    const {loggedInUserEmail, oldPassword, newPassword, confirmPassword } = req.body;
    if (!oldPassword || !newPassword || !confirmPassword) {
      res.status(400).send({ error: 'All fields are required!' });
      return;
    }
    const user = await findByEmail(loggedInUserEmail);
    if (!user) {
      res.status(422).send({ error: 'Email incorrect' });
      return;
    }
    if (user.password != oldPassword) {
      res.status(422).send({ error: 'Old password incorrect!' });
      return;
    }
    if (oldPassword == newPassword) {
      res.status(422).send({ error: 'New password can\'t be the same as old password!' });
      return;
    }
    if (newPassword !== confirmPassword) {
      res.status(422).send({ error: 'New password and confirm password must match!' });
      return;
    }

    const updated = await update({ ...user, password: newPassword });
    res.status(200).send(updated);
  }
}
