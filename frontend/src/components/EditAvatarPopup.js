import React from "react";
import PopupWithForm from "./PopupWithForm";


function EditAvatarPopup(props) {
  const inputAvatarUrl = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: inputAvatarUrl.current.value,
    });
  }

  React.useEffect(() => {
    inputAvatarUrl.current.value = '';
 }, [props.isOpen]);

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      children={
        <>
          <input ref={inputAvatarUrl} name="avatarUrl" type="url" placeholder="Ссылка на картинку"
            className="popup__input-text popup__input-text_type_url" required />
          <span className="popup__error popup__error_avatarUrl">1</span>
        </>
      }
    />
  );
}

export default EditAvatarPopup;