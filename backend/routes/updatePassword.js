const { findByEmail, updatePassword } = require('../db/user')

module.exports = {
  updatePassword: async function (req, res) {
    const { userEmail, newPassword, confirmPassword } = req.body;
    const user = await findByEmail(userEmail);
    if (!user) {
      res.status(400).send({ error: 'Password reset link expired!' })
      return; 
    }
    if (user.password == newPassword) {
      res.status(400).send({ error: 'New password can\'t be the same as old password!' })
      return;
    }
    if (newPassword !== confirmPassword) {
      res.status(400).send({ error: 'Password and confirm password must match!' })
      return;
    }
    const updated = await updatePassword({...user, password: newPassword });
    res.status(200).send(updated);
  }
}