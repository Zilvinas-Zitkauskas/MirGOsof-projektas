const crypto = require('crypto');

const resetToken = new Map();

function reset(token) {
    const user = resetToken.get(token);
    if (!user)
    {
      return null;
    }
    if (Date.now() < user.expires) {
      return(user.email);
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