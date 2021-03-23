import React, { useState } from "react";
import CheckIcon from "@material-ui/icons/Check";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button } from "@material-ui/core";

const Todo = ({ deleteTodo, id, text }) => {
  const [status, setStatus] = useState(true);
  return (
    <div className="todo-container">
      <div className="todo">{status ? text : <strike>{text}</strike>}</div>
      <div className="buttons">
        <Button
          onClick={() => {
            setStatus(!status);
          }}
          variant="contained"
          color="primary"
        >
          <CheckIcon />
        </Button>
        <Button
          onClick={() => deleteTodo(id)}
          variant="contained"
          color="secondary"
        >
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
};

export default Todo;
