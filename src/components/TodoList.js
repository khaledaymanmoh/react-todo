import React from 'react';
import TodoItem from './TodoItem';
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion"

const TodoList = ({ todos, setTodos }) => {
  return (

    <motion.div className='todo-list'>
      <AnimatePresence>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </AnimatePresence>

    </motion.div>

  );
};

export default TodoList;
