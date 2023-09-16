import { AiOutlineCloseCircle } from "react-icons/ai";
import "./Modal.css";

const Modal = ({ cmt, closeModal, open }) => {
  return (
    <div
      className={open ? "overlay open" : "overlay"}
      onClick={() => closeModal(false)}
    >
      <div
        className={open ? "window open" : "window"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-close-container">
          <div className="modal-close-btn" onClick={() => closeModal(false)}>
            <AiOutlineCloseCircle size={25} />
          </div>
        </div>
        <div className="modal-info-box">
          <h3 className="modal-title">User data</h3>
          <div className="line"></div>
          <ul className="modal-list">
            <li className="modal-item">
              <p className="modal-item-base">First Name</p>
              <span className="modal-item-text">{cmt.firstName}</span>
            </li>
            <li className="modal-item">
              <p className="modal-item-base">Last Name</p>
              <span className="modal-item-text">{cmt.lastName}</span>
            </li>
            <li className="modal-item">
              <p className="modal-item-base">Email</p>
              <span className="modal-item-text">{cmt.email}</span>
            </li>
            <li className="modal-item">
              <p className="modal-item-base">Age</p>
              <span className="modal-item-text">{cmt.age}</span>
            </li>
            <li className="modal-item">
              <p className="modal-item-base">Occupation</p>
              <span className="modal-item-text">{cmt.occupation}</span>
            </li>
            <li className="modal-item">
              <p className="modal-item-base">Location</p>
              <span className="modal-item-text">{cmt.location}</span>
            </li>
          </ul>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
