import React, { useState } from "react";
import CheckIcon from "@material-ui/icons/Check";
import DeleteIcon from "@material-ui/icons/Delete";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
const useStyles = makeStyles({
  btn: {
    "&:first-of-type": {
      borderRadius: "5px 0 0 5px",
    },

    "&:last-of-type": {
      borderRadius: "0 5px 5px 0",
      marginRight: "5px",
    },
  },
});
const Todo = ({ deleteTodo, id, text, status, toggleStatus }) => {
  const classes = useStyles();
  return (
    <ToDoContainer>
      <Todop>{status ? text : text + " (Completed)"}</Todop>
      <Buttons>
        <Button
          onClick={() => {
            toggleStatus({ status, text, id });
          }}
          variant="contained"
          color="primary"
          className={classes.btn}
        >
          {status ? <CheckBoxOutlineBlankIcon /> : <CheckBoxIcon />}
        </Button>
        <Button
          onClick={() => deleteTodo(id)}
          variant="contained"
          color="secondary"
          className={classes.btn}
        >
          <DeleteIcon />
        </Button>
      </Buttons>
    </ToDoContainer>
  );
};

export default Todo;

const ToDoContainer = styled.div`
  display: flex;

  margin: 10px;
  align-items: center;
  height: 100%;
  padding: 0 0 0 10px;
  font-size: 18px;
  color: white;
  background-color: violet;
  border-radius: 5px;
`;
const Todop = styled.p``;
const Buttons = styled.div`
  height: 100%;
  margin-left: auto;
`;
