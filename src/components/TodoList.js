import React from "react";
import Todo from "./Todo";
import styled from "styled-components";
const TodoList = ({ deleteTodo, todos, toggleStatus, filteredTodos }) => {
  return (
    <ListWrapper>
      {filteredTodos.map((todo) => {
        return (
          <ListItem key={todo.id}>
            <Todo
              {...todo}
              deleteTodo={deleteTodo}
              toggleStatus={toggleStatus}
            />
          </ListItem>
        );
      })}
    </ListWrapper>
  );
};

export default TodoList;
const ListWrapper = styled.ul`
  list-style-type: none;

  padding: 20px 0;
  background-color: white;
  border-radius: 10px;
`;
const ListItem = styled.li``;
