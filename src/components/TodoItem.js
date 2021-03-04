// import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faTrashAlt,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const TodoItem = ({ todos, setTodos, id, task, completed }) => {
  const handleComplete = () => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !completed };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  const handleDelete = () => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    // <AnimatePresence>
    <motion.div
      variants={todoAnim}
      initial='hidden'
      animate='show'
      // exit='exit'
      layout
      className={`todo-item ${completed ? 'completed-task' : ''}`}
    >
      <h2 className='task'>{task}</h2>
      <div className='icons'>
        <FontAwesomeIcon
          className='icon'
          icon={completed ? faCheck : faCircleNotch}
          onClick={handleComplete}
        />
        <FontAwesomeIcon
          className='icon'
          icon={faTrashAlt}
          onClick={handleDelete}
        />
      </div>
    </motion.div>
    // </AnimatePresence>
  );
};

const todoAnim = {
  hidden: {
    opacity: 0,
    scale: 1.1,
    y: -5,
    // width: '0%',
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    // width: '50%',

    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
};

export default TodoItem;
