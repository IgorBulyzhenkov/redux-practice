import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './todos-actions';
import todoOperetion from './todos-operations';

const { fetchTodos, addTodo, deleteTodo, toggleTodo } = todoOperetion;

const {
  // fetchTodoRequest,
  // fetchTodoSuccess,
  // fetchTodoError,
  // addTodoRequest,
  // addTodoSuccess,
  // addTodoError,
  // deleteRequest,
  // deleteSuccess,
  // deleteError,
  changeFilter,
  // toggleRequest,
  // toggleSuccess,
  // toggleError,
} = actions;

const items = createReducer([], {
  [fetchTodos.fulfilled]: (_, { payload }) => payload,
  [addTodo.fulfilled]: (state, action) => [...state, action.payload],
  [deleteTodo.fulfilled]: (state, action) => {
    console.log(action.payload);
    return state.filter(({ id }) => id !== action.payload);
  },
  [toggleTodo.fulfilled]: (state, { payload }) =>
    state.map(todo => {
      return todo.id === payload.id ? payload : todo;
    }),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addTodo.pending]: () => true,
  [addTodo.fulfilled]: () => false,
  [addTodo.rejected]: () => false,
  [deleteTodo.pending]: () => true,
  [deleteTodo.fulfilled]: () => false,
  [deleteTodo.rejected]: () => false,
  [toggleTodo.pending]: () => true,
  [toggleTodo.fulfilled]: () => false,
  [toggleTodo.rejected]: () => false,
  [fetchTodos.pending]: () => true,
  [fetchTodos.fulfilled]: () => false,
  [fetchTodos.rejected]: () => false,
});

const error = createReducer(null, {
  [addTodo.pending]: () => false,
  [addTodo.rejected]: () => true,
  [deleteTodo.pending]: () => true,
  [deleteTodo.rejected]: () => false,
  [toggleTodo.pending]: () => false,
  [toggleTodo.rejected]: () => true,
  [fetchTodos.pending]: () => false,
  [fetchTodos.rejected]: (_, { payload }) => payload,
});  

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
