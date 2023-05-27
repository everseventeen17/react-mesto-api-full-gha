const jwt = require('jsonwebtoken');
require('dotenv').config();
const { UnauthorizedError } = require('../utils/UnauthorizedError');

const { NODE_ENV, JWT_SECRET } = process.env;

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
    payload = await jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'super-strong-secret');
  } catch (err) {
    return authError(next);
  }
  req.user = payload;
  return next();
};
