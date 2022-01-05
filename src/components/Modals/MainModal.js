import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const MainModal = (props) => {
  if (!props.visible) {
    return null;
  }

  return (
    <div className="modal-background-container">
      <div className="modal-container">
        <div className="modal-title-header">
          <span className="modal-title">{props.title}</span>
          <span className="modal-close" onClick={props.onClose}>
            {props.closeIcon}
          </span>
        </div>
        <div className="modal-content">{props.children}</div>
        <div className="modal-actions">
          {props.renderFooter ? (
            props.renderFooter()
          ) : (
            <div className="modal-default-actions">
              <button className="modal-actions-ok-btn" onClick={props.onClose}>
                Ok
              </button>
              <button
                className="modal-actions-cancel-btn"
                onClick={props.onClose}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

MainModal.defaultProps = {
  title: "",
  visible: false,
  closeIcon: <>&times;</>,
  onClose: () => {},
  renderFooter: undefined,
};

MainModal.propTypes = {
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  closeIcon: PropTypes.element,
  onClose: PropTypes.func.isRequired,
  renderFooter: PropTypes.func,
};

export default MainModal;
