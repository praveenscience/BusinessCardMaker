import React from "react";

const dummyOnChange = () => {};
const FormElement = ({ ID, Label, Value }) => {
  return (
    <label>
      <strong>{Label}</strong>
      <input type="text" name={ID} value={Value} onChange={dummyOnChange} />
    </label>
  );
};

export default FormElement;
