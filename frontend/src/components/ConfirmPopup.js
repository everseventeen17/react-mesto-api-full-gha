import PopupWithForm from "./PopupWithForm";

function ConfirmPopup ({onDeleteCard, onClose, isOpen}) {

  function handleSubmit(e) {
    e.preventDefault();
    onDeleteCard();
  }

  return(
    <PopupWithForm
      title="Вы уверены?"
      name="confirm"
      buttonText="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  )
}
export default ConfirmPopup;