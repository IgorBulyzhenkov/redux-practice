import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from './counter/counter-reducer';
import todosReducer from './todos/todos-reducer';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: { counter: counterReducer, todos: todosReducer },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
