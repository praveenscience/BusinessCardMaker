import React from "react";
import FormElement from "./FormElement";

const Form = () => {
  return (
    <section className="Form">
      <h2>Enter your Details</h2>
      <form>
        <FormElement ID="Name" Label="Name" />
        <FormElement ID="Designation" Label="Designation" />
        <FormElement ID="Phone" Label="Phone" />
      </form>
    </section>
  );
};

export default Form;
