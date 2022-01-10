import React from "react";
import "./index.css";
import MainModal from "../../../components/Modals/MainModal";

const DeleteModal = (props) => {
  return (
    <MainModal
      title=""
      visible={props.open}
      onClose={() => props.setOpen(false)}
      renderFooter={() => <React.Fragment />}
    >
      <div className="delete-modal-container">
        <span>Are you sure want to delete the event?</span>
      </div>
      <div className="delete-actions">
        <button
          className="form-actions-delete-btn"
          onClick={() => props.deleteCalendarEvent()}
        >
          Delete
        </button>
        <button
          className="form-actions-cancel-btn"
          onClick={() => props.setOpen(false)}
        >
          Cancel
        </button>
      </div>
    </MainModal>
  );
};

export default DeleteModal;
