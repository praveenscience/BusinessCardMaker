import React from "react";
import Header from "./Header";
import Form from "./Form";
import Preview from "./Preview";

const App = () => {
  return (
    <div className="App">
      <Header Dark={true}>Professional Card Maker</Header>
      <main>
        <Form />
        <Preview />
      </main>
    </div>
  );
};

export default App;
