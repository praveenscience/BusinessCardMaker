import React from "react";
import FormElement from "./FormElement";

const Form = ({ onChange, Values }) => {
  return (
    <section className="Form">
      <h2>Enter your Details</h2>
      <form onChange={onChange}>
        {Object.keys(Values).map((field, key) => (
          <FormElement
            ID={field}
            Label={field}
            Value={Values[field]}
            key={key}
          />
        ))}
      </form>
    </section>
  );
};

export default Form;
