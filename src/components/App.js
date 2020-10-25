import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Preview from "./Preview";

const App = () => {
  const [Name, setName] = useState("");
  const [Designation, setDesignation] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const Values = {
    Name,
    Designation,
    Phone,
    Email
  };
  return (
    <div className="App">
      <Header Dark={true}>Professional Card Maker</Header>
      <main>
        <Form Values={Values} />
        <Preview />
      </main>
    </div>
  );
};

export default App;
