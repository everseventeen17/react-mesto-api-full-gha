import React from 'react';
import Card from "./Card.js";
import { CurrentUserContext } from '../contexsts/CurrentUserContext.js';

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  return (

    <main className="main">
      <section className="profile">
        <div className="profile__inner">
          <img src={currentUser.avatar} alt="Аватар" className="profile__avatar" />
          <button type="button" aria-label="Редактировать аватар" className="profile__avatar-button"
            onClick={props.onEditAvatar}></button>
          <div className="profile__info">
            <div className="profile__name-wrapper">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button type="button" aria-label="Редактировать профиль" className="profile__edit-button"
                onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__job">{currentUser.about}</p>
          </div>
        </div>
        <button type="button" aria-label="Добавить карточку" className="profile__add-button"
          onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">


        {props.cards.map((card) => (
          <Card
            card={card}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
            key={card._id}
          />
        ))}

      </section>
    </main>
  )
}

export default Main;