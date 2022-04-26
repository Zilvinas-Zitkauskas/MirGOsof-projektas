const { reset } = require('../db/resetToken');

module.exports = {
  resetPassword: async function (req, res) {
    const { token } = req.query;
    const userEmail = await reset(token);
    if (userEmail) {
      res.status(200).send({ userEmail });
      return;
    }
    res.sendStatus(404);
  }
}