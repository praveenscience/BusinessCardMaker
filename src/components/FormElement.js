import React from "react";

const FormElement = ({ ID, Label, Value }) => {
  return (
    <label>
      <strong>{Label}</strong>
      <input type="text" name={ID} value={Value} />
    </label>
  );
};

export default FormElement;
