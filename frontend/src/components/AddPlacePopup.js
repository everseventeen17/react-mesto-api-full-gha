import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const inputPlaceTitle = React.useRef();
  const inputPlaceUrl = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: inputPlaceTitle.current.value,
      link: inputPlaceUrl.current.value
    });
  }

  React.useEffect(() => {
    inputPlaceTitle.current.value = '';
    inputPlaceUrl.current.value = '';
 }, [props.isOpen]);

  return (
    <PopupWithForm
      title="Новое место"
      name="place"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      children={
        <>
          <input ref={inputPlaceTitle} name="placeName" type="text" placeholder="Название" required
            className="popup__input-text popup__input-text_type_title" minLength="2" maxLength="30" />
          <span className="popup__error popup__error_placeName">1</span>
          <input ref={inputPlaceUrl} name="placeUrl" type="url" placeholder="Ссылка на картинку"
            className="popup__input-text popup__input-text_type_url" required />
          <span className="popup__error popup__error_placeUrl">1</span>
        </>
      }
    />
  );
}

export default AddPlacePopup;