import React from "react";
import { CurrentUserContext } from "../contexsts/CurrentUserContext";


function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(item => item._id === currentUser._id);

  function handleLikeClick() {
    props.onCardLike(props.card)
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card)
  }

  function handleCardClick() {
    props.onCardClick(props.card)
  }

  return (
    <li className="element">
      {isOwn && <button onClick={handleDeleteClick} type="button" aria-label="Удалить" className="element__delete-button"></button>}
      <img onClick={handleCardClick} src={props.card.link} alt={props.card.name}
        className="element__img" />
      <div className="element__rectangle">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-wrapper">
          <button onClick={handleLikeClick} className={`element__btn-like ${isLiked && 'element__btn-like_active'}`} type="button" aria-label="Оценить"></button>
          <p className="element__like-counter element__like-counter_active">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;