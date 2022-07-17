import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './todos-actions';

const {
  fetchTodoRequest,
  fetchTodoSuccess,
  fetchTodoError,
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteRequest,
  deleteSuccess,
  deleteError,
  changeFilter,
  toggleRequest,
  toggleSuccess,
  toggleError,
} = actions;

const items = createReducer([], {
  [fetchTodoSuccess]: (_, { payload }) => payload,
  [addTodoSuccess]: (state, action) => [...state, action.payload],
  [deleteSuccess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
  [toggleSuccess]: (state, { payload }) =>
    state.map(todo => {
      return todo.id === payload.id ? payload : todo;
    }),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addTodoRequest]: () => true,
  [addTodoSuccess]: () => false,
  [addTodoError]: () => false,
  [deleteRequest]: () => true,
  [deleteSuccess]: () => false,
  [deleteError]: () => false,
  [toggleRequest]: () => true,
  [toggleSuccess]: () => false,
  [toggleError]: () => false,
  [fetchTodoRequest]: () => true,
  [fetchTodoSuccess]: () => false,
  [fetchTodoError]: () => false,
});

const error = createReducer(false, {
  [addTodoRequest]: () => false,
  [addTodoError]: () => true,
  [deleteRequest]: () => false,
  [deleteError]: () => true,
  [toggleRequest]: () => false,
  [toggleError]: () => true,
  [fetchTodoRequest]: () => false,
  [fetchTodoError]: () => true,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
