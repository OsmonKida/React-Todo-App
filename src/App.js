import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);

  // const addTodo = (todo) => {
  //   setTodos([
  //     ...todos,
  //     {
  //       status: "uncompleted",
  //       text: todo,
  //       id: new Date().getTime().toString(),
  //     },
  //   ]);
  // };
  const url = "http://localhost:8000/data";

  const fetchData = (url) => {
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => setTodos(data))
      .catch((err) => console.log(err));
  };

  const addTodo = (todo) => {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    })
      .then(() => {
        fetchData(url);
      })
      .catch((err) => console.log(err));
  };

  const deleteTodo = (id) => {
    fetch("http://localhost:8000/data/" + id, { method: "DELETE" })
      .then(() => {
        fetchData(url);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Form addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
