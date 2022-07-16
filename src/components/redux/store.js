import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from './counter/counter-reducer';
import todosReducer from './todos/todos-reducer';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const todoPirsistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};
const counterPirsistConfig = {
  key: 'counter',
  storage,
};

const store = configureStore({
  reducer: {
    counter: persistReducer(counterPirsistConfig, counterReducer),
    todos: persistReducer(todoPirsistConfig, todosReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

const storePersist = { store, persistor }

export default storePersist;
