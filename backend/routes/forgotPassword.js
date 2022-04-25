const crypto = require('crypto');
const { findByEmail, update } = require('../db/user');
const { clientUrl, emailAddress, emailPassword } = require('../environment');
const nodemailer = require('nodemailer');

module.exports = {
  forgotPassword: async function (req, res) {
    const { email } = req.body;
    const user = await findByEmail(email);
    if (!user) {
      res.status(422).send({ error: 'Email not registered!' })
      return;
    }

    const token = crypto.randomBytes(20).toString('hex');
    await update({
      ...user,
      resetPasswordToken: token,
      resetPasswordExpires: Date.now() + 3600000,
    });

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
      subject: 'Link To Reset Password',
      text:
        'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n'
        + 'Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n'
        + `${clientUrl}/resetpassword/${token}\n\n`
        + 'If you did not request this, please ignore this email and your password will remain unchanged.\n',
    };

    transporter.sendMail(mailOptions, (err) => {
      if (!err) {
        res.sendStatus(204);
      }
    });
  }
}