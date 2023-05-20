export function InfoTooltip({isOpen, onClose, title, image}) {
    return (
        <div className={`popup ${isOpen ? `popup_opened` : ''}`}>
            <div className="popup__container">

                <button type="button" onClick={onClose} aria-label="Закрыть"
                        className="popup__close-btn"></button>

                <img className="popup__info-img" src={image} alt={title}/>
                <h2 className="popup__title popup__title_info">{title}</h2>

            </div>
        </div>
    )
};
