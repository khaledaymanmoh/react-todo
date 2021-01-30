import React from "react";
import { v4 as uuidv4 } from "uuid";

const CreateTodo = ({ textInput, setTextInput, todos, setTodos }) => {
  //Handlers
  const handleInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textInput !== "") {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          task: textInput,
          completed: false,
        },
      ]);
      setTextInput("");
    }
  };

  return (
    <form className='CreateTodo' onSubmit={handleSubmit}>
      <input
        type='text'
        onChange={handleInputChange}
        value={textInput}
        cols='50'
        rows='10'
        placeholder='Enter Task Here..'
      ></input>
      <button>ADD!</button>
    </form>
  );
};
export default CreateTodo;
