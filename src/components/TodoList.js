import React from "react";
import Todo from "./Todo";
const TodoList = ({ deleteTodo, todos }) => {
  return (
    <div className="list-wrapper">
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <Todo {...todo} deleteTodo={deleteTodo} />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
