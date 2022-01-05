import React from "react";
import PropTypes from "prop-types";
import FormContext from "./FormContext";

const Form = (props) => {
  const [formValues, setFormValues] = React.useState({});

  const [errors, setErrors] = React.useState({});

  React.useEffect(() => {
    setFormValues(props.initialValues);
  }, [props.initialValues]);

  const setFieldError = (field_name, error) => {
    setErrors({
      ...errors,
      [field_name]: error,
    });
  };

  const setFieldValue = (field_name, value) => {
    setFormValues({
      ...formValues,
      [field_name]: value,
    });
  };

  const handleDefaultOnChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.onValidateFields) {
      let errors = props.onValidateFields(formValues, {
        setFieldError,
        setFieldValue,
      });
      if (Object.keys(errors).length === 0) {
        props.onSubmit(formValues);
      } else {
        setErrors(errors);
      }
    } else {
      props.onSubmit(formValues);
    }
  };

  return (
    <form name={props.name} ref={props.formRef} onSubmit={handleSubmit}>
      <FormContext.Provider
        value={{
          formValues,
          errors,
          setFieldError,
          setFieldValue,
          handleDefaultOnChange,
        }}
      >
        <FormContext.Consumer>{props.children}</FormContext.Consumer>
      </FormContext.Provider>
    </form>
  );
};

Form.defaultProps = {
  name: "",
  formRef: (ref) => {},
  onSubmit: (values) => {},
  initialValues: {},
  onValidateFields: undefined,
};

Form.propTypes = {
  name: PropTypes.string,
  formRef: PropTypes.func,
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object,
  onValidateFields: PropTypes.func,
};

export default Form;
