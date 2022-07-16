import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addTodo = createAction('todos/Add', text => {
  return {
    payload: {
      id: shortid.generate(),
      text,
      completed: false,
    },
  };
});

const toggleCompleted = createAction('todos/toggleCompleted');

const addDelete = createAction('todos/Delete');

const changeFilter = createAction('todos/changeFilter');

const todosAtions = { addTodo, addDelete, toggleCompleted, changeFilter };

export default todosAtions;
