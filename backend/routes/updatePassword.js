const { findByEmail, update } = require('../db/user')

module.exports = {
  updatePassword: async function (req, res) {
    const { userEmail, newPassword, confirmPassword } = req.body;
    if (newPassword !== confirmPassword) {
      res.status(400).send({ error: 'Password and confirm password must match!' })
      return;
    }
    const user = await findByEmail(userEmail);
    const updated = await update({...user, password: newPassword });
    res.status(200).send(updated);
  }
}