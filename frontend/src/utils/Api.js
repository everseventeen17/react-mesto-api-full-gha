import { apiData } from "./constants.js";
class Api {
  constructor(apiData) { // принимает объект с ссылкой и токеном
    this._link = apiData.link; // ссылка идентификатор группы cohort-59
    this._headers = apiData.headers; // токен
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка ${res.status}`);
    }
  }


  // 1. Загрузка информации о пользователе с сервера
  getProfileData() {
    return fetch(`${this._link}users/me`, {
      headers: this._headers,
      method: 'GET',
    })
      .then(this._checkResponse)
  };

  // 2. Загрузка карточек с сервера
  getInitialCards() {
    return fetch(`${this._link}cards`, {
      headers: this._headers,
      method: 'GET',
    })
    .then(this._checkResponse)
  };

  // 3. Редактирование профиля
  patchProfileData({name, about}) {
    return fetch(`${this._link}users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({ name, about })
    })
    .then(this._checkResponse)
  };

  // 4. Добавление новой карточки
  postNewCard({ name, link }) {
    return fetch(`${this._link}cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({ name, link })
    })
    .then(this._checkResponse)
  };

  // 5. Удаление карточки
  deleteCard(cardId) {
    return fetch(`${this._link}cards/${cardId}`, {
      headers: this._headers,
      method: 'DELETE',
    })
    .then(this._checkResponse)
  };



  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this._link}cards/${cardId}/likes`, {
      headers: this._headers,
      method: isLiked ? 'DELETE' : 'PUT',
    })
    .then(this._checkResponse)
  };


  // 6. Постановка и снятие лайка
  // публичный метод добавить лайк на сервер
  // putLike(cardId) {
  //   return fetch(`${this._link}cards/${cardId}/likes`, {
  //     headers: this._headers,
  //     method: 'PUT',
  //   })
  //   .then(this._checkResponse)
  // };

  // публичный метод убрать лайк с сервера
  // deleteLike(cardId) {
  //   return fetch(`${this._link}cards/${cardId}/likes`, {
  //     headers: this._headers,
  //     method: 'DELETE',
  //   })
  //   .then(this._checkResponse)
  // };


  // 7. Обновление аватара пользователя
  patchAvatar(avatarUrl) {
    return fetch(`${this._link}users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify(avatarUrl)
    })
      .then(this._checkResponse)
  };
}
export const api = new Api(apiData);