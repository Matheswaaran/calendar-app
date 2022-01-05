import React from "react";

const FormContext = React.createContext();

export default FormContext;

export const useForm = () => {
  return React.useContext(FormContext);
};
