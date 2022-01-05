import React from "react";
import "./FormInput.css";
import PropTypes from "prop-types";
import { useForm } from "./FormContext";

const FormInput = (props) => {
  const form = useForm();

  return (
    <div className="form-input-group">
      {props.label && <label>{props.label}</label>}
      <div className="form-input">
        {props.textArea ? (
          <textarea
            name={props.field}
            value={props.value || form.formValues[props.field]}
            onChange={props.onChange || form.handleDefaultOnChange}
            className={`${form?.errors[props.field] ? "input-error" : ""}`}
          />
        ) : (
          <input
            name={props.field}
            type={props.type}
            value={props.value || form.formValues[props.field]}
            onChange={props.onChange || form.handleDefaultOnChange}
            className={`${form?.errors[props.field] ? "input-error" : ""}`}
          />
        )}
        <div className="form-error-message">
          {form?.errors[props.field] || null}
        </div>
      </div>
    </div>
  );
};

FormInput.defaultProps = {
  field: "",
  label: "",
  type: "text",
  value: "",
  onChange: undefined,
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
