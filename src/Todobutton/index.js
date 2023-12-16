import React from "react";
import "./TodoButton.css";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
  const { handleClick } = React.useContext(TodoContext);
  return (
    <button className="CreateTodoButton" onClick={handleClick}>
      +
    </button>
  );
}

export { CreateTodoButton };
