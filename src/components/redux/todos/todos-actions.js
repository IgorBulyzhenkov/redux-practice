// import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

// // const fetchTodoRequest = createAction('todos/fetchTodoRequest');
// // const fetchTodoSuccess = createAction('todos/fetchTodoSuccess');
// // const fetchTodoError = createAction('todos/fetchTodoError');

// const addTodoRequest = createAction('todos/addTodoRequest');
// const addTodoSuccess = createAction('todos/addTodoSuccess');
// const addTodoError = createAction('todos/addTodoError');

// const deleteRequest = createAction('todos/deleteRequest');
// const deleteSuccess = createAction('todos/deleteSuccess');
// const deleteError = createAction('todos/deleteError');

// const toggleRequest = createAction('todos/toggleRequest');
// const toggleSuccess = createAction('todos/toggleSuccess');
// const toggleError = createAction('todos/toggleError');

const changeFilter = createAction('todos/changeFilter');

const todosActions = {
  // fetchTodoRequest,
  // fetchTodoSuccess,
  // fetchTodoError,
  //   addTodoRequest,
  //   addTodoSuccess,
  //   addTodoError,
  //   deleteRequest,
  //   deleteSuccess,
  //   deleteError,
  changeFilter,
  //   toggleRequest,
  //   toggleSuccess,
  //   toggleError,
};

export default todosActions;
