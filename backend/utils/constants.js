const BAD_REQUEST_ERROR_CODE = 400;
const NOT_FOUND_ERROR_CODE = 404;
const FORBIDDEN_ERROR_CODE = 403;
const UNAUTHORIZED_ERROR_CODE = 401;
const CONFLICT_ERROR_CODE = 409;
const SERVER_ERROR_CODE = 500;
const SUCCESS_CODE = 200;
const regExp = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!])*)?/;

const ALLOWED_CORS = [
  'http://mesto1337.nomoredomains.monster',
  'https://mesto1337.nomoredomains.monster',
  'http://51.250.82.167',
  'https://51.250.82.167',
  'localhost:3000',
  'localhost:3001',
];

const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

module.exports = {
  NOT_FOUND_ERROR_CODE,
  BAD_REQUEST_ERROR_CODE,
  SERVER_ERROR_CODE,
  SUCCESS_CODE,
  FORBIDDEN_ERROR_CODE,
  UNAUTHORIZED_ERROR_CODE,
  CONFLICT_ERROR_CODE,
  regExp,
  ALLOWED_CORS,
  DEFAULT_ALLOWED_METHODS,
};
