import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = ({ title }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(!modalIsOpen);
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      <div>
        {modalIsOpen && <Modal onAction={closeModal} />}
        {modalIsOpen && <Backdrop />}
      </div>
    </div>
  );
};

export default Todo;
