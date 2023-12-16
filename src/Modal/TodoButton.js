import React from "react";
import "./Modal.css";
import { TodoContext } from "../TodoContext";

function TodoButton() {
  const { handleClick } = React.useContext(TodoContext);

  return (
    <button className="ModalButton" onClick={handleClick}>
      Click!
    </button>
  );
}

export { TodoButton };
