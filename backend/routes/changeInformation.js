const { findByEmail, updateUser } = require('../db/user')

module.exports = {
  changeInformation: async function (req, res) {
    const {newFullName, newUsername, userEmail, newCity, newAddress} = req.body;
    const user = await findByEmail(userEmail);
    if (!user) {
      res.status(400).send({ error: 'No user found!' })
      return; 
    }
    const updated = await updateUser({...user, fullName: newFullName, username: newUsername, city: newCity, address: newAddress});
    res.status(200).send(updated);
  }
}