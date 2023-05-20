
import React from 'react';
import { CurrentUserContext } from '../contexsts/CurrentUserContext';
import PopupWithForm from './PopupWithForm.js';



function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState(currentUser.name);
  const [description, setDescription] = React.useState(currentUser.about);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  return (
    <PopupWithForm
    name="profile"
    title="Редактировать профиль"
    buttonText="Сохранить"
    isOpen={props.isOpen}
    onClose={props.onClose}
    onSubmit={handleSubmit}
    children={
      <>
        <input onChange={handleChangeName} value={name || ''} className="popup__input-text popup__input-text_type_name" required
          minLength="2" maxLength="40" name="profileName" type="text" placeholder="Имя" />
        <span className="popup__error popup__error_profileName">11</span>
        <input onChange={handleChangeDescription} value={description || ''} name="profileUserAbout" type="text" placeholder="О себе" required
          className="popup__input-text popup__input-text_type_job" minLength="2" maxLength="200" />
        <span className="popup__error popup__error_profileUserAbout">1</span>
      </>
    }
  />
  )
}

export default EditProfilePopup;