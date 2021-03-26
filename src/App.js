import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("All");

  const url = "http://localhost:8000/data/";

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
    fetch(url + id, { method: "DELETE" })
      .then(() => {
        fetchData(url);
      })
      .catch((err) => console.log(err));
  };

  const toggleStatus = (todo) => {
    fetch(url + todo.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...todo, status: !todo.status }),
    })
      .then(() => fetchData(url))
      .catch((err) => console.log(err));
  };

  const filterHandler = () => {
    switch (status) {
      case "Uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.status === true));
        break;
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.status === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  return (
    <div className="App">
      <div className="container">
        <Form addTodo={addTodo} status={status} setStatus={setStatus} />
        <TodoList
          deleteTodo={deleteTodo}
          toggleStatus={toggleStatus}
          filteredTodos={filteredTodos}
        />
      </div>
    </div>
  );
}

export default App;
