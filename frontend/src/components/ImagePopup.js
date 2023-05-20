function ImagePopup(props){
  return (
    <div className={`popup popup_type_photo ${props.card.name ? `popup_opened` : ''}`}>
        <div className="popup__container popup__container_type_photo">
          <button type="button" aria-label="Закрыть" className="popup__close-btn"
          onClick={props.onClose}></button>
          <img className="popup__image" src={`${props.card.link}`} alt={props.card.name} />
          <h3 className="popup__text">{props.card.name}</h3>
        </div>
      </div>
  )
}
export default ImagePopup;