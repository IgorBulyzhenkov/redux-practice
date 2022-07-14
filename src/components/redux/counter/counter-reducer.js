import { combineReducers } from 'redux';
import * as types from './counter-types';

const valueReducer = (state = 10, { type, payload }) => {
  switch (type) {
    case types.INCREMENT:
      return state + payload;

    case types.DECREMENT:
      return state - payload;
    default:
      return state;
  }
};

const stepReducer = (state = 5, action) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});

