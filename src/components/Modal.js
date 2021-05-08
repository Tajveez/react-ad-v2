const Modal = ({ onAction }) => {
  return (
    <div className="modal">
      <p>Are you sure, mate?</p>
      <button onClick={onAction} className="btn btn--alt">
        Cancel
      </button>
      <button onClick={onAction} className="btn">
        Confirm
      </button>
    </div>
  );
};

export default Modal;
