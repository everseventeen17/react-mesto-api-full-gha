const jwt = require('jsonwebtoken');
require('dotenv').config();
const { UnauthorizedError } = require('../utils/UnauthorizedError');

const { JWT_SECRET = 'default' } = process.env;

const authError = (next) => {
  next(new UnauthorizedError('Необходима авторизация'));
};

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return authError(next);
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = await jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return authError(next);
  }
  req.user = payload;
  return next();
};
