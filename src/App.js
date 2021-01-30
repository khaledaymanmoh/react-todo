import React, { useState } from "react";
import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";
import "./styles/App.scss";

function App() {
  const [todos, setTodos] = useState([]);
  const [textInput, setTextInput] = useState("");
  return (
    <div className='App'>
      <CreateTodo
        textInput={textInput}
        setTextInput={setTextInput}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
