const { findByEmail } = require('../db/user');
const { emailAddress, emailPassword } = require('../environment');
const nodemailer = require('nodemailer');

module.exports = {
  checkoutCart: async function (req, res) {
    const { email } = req.body;
    const user = await findByEmail(email);
    if (!user) {
      res.status(422).send({ error: 'Email not registered!' })
      return;
    }

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailAddress,
        pass: emailPassword,
      },
    });

    const mailOptions = {
      from: `${emailAddress}@gmail.com`,
      to: `${user.email}`,
      subject: 'Order confirmation',
      text:
        `Hello ${user.username} your order has been received.
Order date: ${today}
It will be sent out as soon as posible.

Sincerely,
MirGoStore`
    };

    transporter.sendMail(mailOptions, (err) => {
      if (!err) {
        res.sendStatus(204);
      }
    });
  }
}