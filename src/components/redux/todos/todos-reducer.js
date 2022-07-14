import { combineReducers } from 'redux';
import todos from './../../Todos/TodoList/todoList.json';
import { createReducer } from '@reduxjs/toolkit';
import actions from './todos-actions';

const items = createReducer(todos, {
  [actions.addTodo]: (state, action) => [...state, action.payload],
  [actions.addDelete]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
  [actions.toggleCompleted]: (state, { payload }) =>
    state.map(todo => {
     return todo.id === payload ? { ...todo, completed: !todo.completed } : todo;
    }),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
