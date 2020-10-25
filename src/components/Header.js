import React from "react";

const Header = ({ Dark, children }) => {
  return (
    <header className={"Header" + (Dark ? " Dark" : "")}>
      <h1>{children}</h1>
    </header>
  );
};

export default Header;
