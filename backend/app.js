require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');

const { NotFoundError } = require('./utils/NotFoundError');
const handleErrors = require('./utils/handleErrors');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const authRouter = require('./routes/auth');

const { PORT = 3000 } = process.env;
const auth = require('./middlewares/auth');

const app = express();

app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb://localhost:27017/mestodb', {
  autoIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.use('/', authRouter);
app.use(auth);

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.use(errors());

app.use('*', (req, res, next) => {
  next(new NotFoundError('По указанному вами адресу ничего не найдено'));
});

app.use(handleErrors);

app.listen(PORT);
