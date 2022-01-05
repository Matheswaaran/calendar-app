import React from "react";
import "./FormInput.css";
import PropTypes from "prop-types";

const FormInput = (props) => {
  return (
    <div className="form-input-group">
      {props.label && <label>{props.label}</label>}
      {props.textArea ? (
        <textarea
          name={props.field}
          value={props.value}
          onChange={props.onChange}
        />
      ) : (
        <input
          name={props.field}
          type={props.type}
          value={props.value}
          onChange={props.onChange}
        />
      )}
    </div>
  );
};

FormInput.defaultProps = {
  field: "",
  label: "",
  type: "text",
  value: "",
  onChange: () => {},
  textArea: false,
};

FormInput.propTypes = {
  field: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  textArea: PropTypes.bool,
};

export default FormInput;
