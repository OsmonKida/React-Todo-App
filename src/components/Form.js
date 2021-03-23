import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
const useStyles = makeStyles({
  btn: {
    height: "2rem",
  },
  textField: {
    margin: "0 10px 10px 0",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "100%",
  },
  select: {
    width: "200px",
  },
  row: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "20px",
  },
});
const Form = ({ addTodo }) => {
  const classes = useStyles();
  const [addText, setAddText] = useState("");
  const [select, setSelect] = useState("All todos");
  return (
    <form className={classes.form}>
      <div className={classes.row}>
        <TextField
          variant="filled"
          label="Add a todo"
          className={classes.textField}
          fullWidth
          value={addText}
          onChange={(e) => setAddText(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.btn}
          endIcon={<SendIcon />}
          onClick={() => {
            if (addText !== "") {
              const todo = { text: addText, status: "uncompleted" };
              addTodo(todo);
              setAddText("");
            }
          }}
        >
          Add
        </Button>
      </div>

      <div
        className={classes.row}
        style={{ textAlign: "center", justifyContent: "center" }}
      >
        <Select
          className={classes.select}
          value={select}
          onChange={(e) => setSelect(e.target.value)}
        >
          <MenuItem value={"All todos"}>All todos</MenuItem>
          <MenuItem value={"Completed"}>Completed</MenuItem>
          <MenuItem value={"Uncompleted"}>Uncompleted</MenuItem>
        </Select>
      </div>
    </form>
  );
};

export default Form;
