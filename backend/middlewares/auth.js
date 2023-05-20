const jwt = require('jsonwebtoken');
require('dotenv').config();
const { UnauthorizedError } = require('../utils/UnauthorizedError');

const { JWT_SECRET = 'default' } = process.env;

const authError = (next) => {
  next(new UnauthorizedError('Необходима авторизация'));
};

module.exports = async (req, res, next) => {
  const cookieAuth = req.cookies.jwt;
  if (!cookieAuth) {
    return authError(next);
  }
  let payload;
  try {
    payload = await jwt.verify(cookieAuth, JWT_SECRET);
  } catch (err) {
    return authError(next);
  }
  req.user = payload;
  return next();
};
