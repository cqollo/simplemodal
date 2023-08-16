import React from "react";
import "./modal.css";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="container" onClick={props.onClose}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <div className="header">Header</div>
        <div className="body">Body</div>
        <button className="yesBtn" onClick={props.onClose}>
          Yes
        </button>
        <button className="noBtn" onClick={props.onClose}>
          No
        </button>
      </div>
    </div>
  );
};

export default Modal;
