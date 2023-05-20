function PopupWithForm({isOpen, onClose, name, title, buttonText, children, onSubmit}) {

  return (
    <div className={`popup popup_type_${name} ${isOpen ? `popup_opened` : ''}`}>
      <div className="popup__container">
        <button type="button" onClick={onClose} aria-label="Закрыть"
          className="popup__close-btn"></button>
        <h2 className="popup__title">{title}</h2>
        <form name={name} method="post" className="popup__form" onSubmit={onSubmit}>
          {children}
          <button type="submit" className="popup__submit-btn">{buttonText}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;