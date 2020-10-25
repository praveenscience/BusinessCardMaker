import React from "react";

const FormElement = ({ ID, Label, Value }) => {
  return (
    <label>
      <strong>{Label}</strong>
      <input type="text" name={ID} Value={Value} />
    </label>
  );
};

export default FormElement;
