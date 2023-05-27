require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
// const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');

const cors = require('./middlewares/cors');
const { NotFoundError } = require('./utils/NotFoundError');
const handleErrors = require('./utils/handleErrors');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const authRouter = require('./routes/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000, MONGO_URL = 'mongodb://127.0.0.1:27017/mestodb'} = process.env;
// 127.0.0.1:27017
const auth = require('./middlewares/auth');

const app = express();

mongoose.connect( MONGO_URL, {
  autoIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.use(express.json());
// app.use(cookieParser());
app.use(cors);
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
app.use(requestLogger);
app.use('/', authRouter);
app.use(auth);

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.use(errorLogger); // подключаем логгер ошибок
app.use(errors());

app.use('*', (req, res, next) => {
  next(new NotFoundError('По указанному вами адресу ничего не найдено'));
});

app.use(handleErrors);

app.listen(PORT);
