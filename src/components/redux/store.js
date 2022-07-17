import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from './counter/counter-reducer';
import todosReducer from './todos/todos-reducer';
import logger from 'redux-logger';
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

const middleware = [...getDefaultMiddleware(), logger];

// const todoPirsistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['filter'],
// };
// const counterPirsistConfig = {
//   key: 'counter',
//   storage,
// };

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

// const storePersist = { store, persistor }

export default store;
