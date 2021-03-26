import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
const useStyles = makeStyles({
  btn: {
    height: "100%",
    borderRadius: "0 5px 5px 0",
  },
  textField: {
    height: "100%",
    borderRadius: "5px 0 0 5px",
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

    marginTop: "20px",
  },
});
export const Form = ({ addTodo, status, setStatus }) => {
  const classes = useStyles();
  const [addText, setAddText] = useState("");

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
              const todo = { status: true, text: addText };
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
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        >
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"Completed"}>Completed</MenuItem>
          <MenuItem value={"Uncompleted"}>Uncompleted</MenuItem>
        </Select>
      </div>
    </form>
  );
};
export default Form;
