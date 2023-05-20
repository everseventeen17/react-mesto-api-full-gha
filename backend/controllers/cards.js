const Card = require('../models/card');
const {
  SUCCESS_CODE,
} = require('../utils/constants');
const { NotFoundError } = require('../utils/NotFoundError');
const { ForbiddenError } = require('../utils/ForbiddenError');
const { BadRequestError } = require('../utils/BadRequestError');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => {
      res.send(cards);
    })
    .catch(next);
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  const ownerId = req.user._id;
  Card.create({ name, link, owner: ownerId })
    .then((card) => {
      res.status(SUCCESS_CODE).send(card);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Некорректные данные при создании карточки'));
      } else {
        next(err);
      }
    });
};

module.exports.deleteCard = (req, res, next) => {
  const removeCard = () => {
    Card.findByIdAndRemove(req.params.cardId)
      .then((card) => {
        res.status(SUCCESS_CODE).send(card);
      })
      .catch(next);
  };

  Card.findById(req.params.cardId)
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Карточка с указанным id  не существует');
      }
      if (req.user._id.toString() !== card.owner.toString()) {
        throw new ForbiddenError('Вы не можете удалить чужую карточку');
      }
      return removeCard();
    })
    .catch(next);
};

module.exports.likeCard = (req, res, next) => {
  const ownerId = req.user._id;
  const { cardId } = req.params;
  Card.findByIdAndUpdate(cardId, { $addToSet: { likes: ownerId } }, { new: true })
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Карточка с указанным id не найдена');
      }
      return res.send(card);
    })
    .catch(next);
};

module.exports.dislikeCard = (req, res, next) => {
  const ownerId = req.user._id;
  const { cardId } = req.params;
  Card.findByIdAndUpdate(cardId, { $pull: { likes: ownerId } }, { new: true })
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Карточка с указанным id не найдена');
      }
      return res.send(card);
    })
    .catch(next);
};
