const { clientUrl, emailAddress, emailPassword} = require('../environment');
const nodemailer = require('nodemailer');

module.exports = {
  support: async function (req, res) {
    const { email, usertext } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailAddress,
        pass: emailPassword,
      },
    });

    const mailOptions = {
      from: `${email}`,
      to: `${emailAddress}@gmail.com`,
      subject: `${email}`,
      text:
        `${usertext}`,
    };

    transporter.sendMail(mailOptions, (err) => {
      if (!err) {
        res.sendStatus(204);
      }
    });
    
  }
}