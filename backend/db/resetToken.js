const e = require("express");
const crypto = require('crypto');

const resetToken = new Map();

function reset(token) {
    const fuck = resetToken.get(token);
    if (!fuck)
    {
      return null;
    }
    if (Date.now() < fuck.expires) {
      return(fuck.email);
    }
    return null;

}

function createToken(email) {
  const token = crypto.randomBytes(20).toString('hex');
  resetToken.set(token, { email, expires: Date.now() + 3600000 });
  return token;
}

module.exports = {
createToken,
reset
}