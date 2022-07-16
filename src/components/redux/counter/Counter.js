import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as action from './counter-actions';

function Counter() {
  const value = useSelector(state => state.counter.value);
  const step = useSelector(state => state.counter.step);

  const dispatch = useDispatch();

  return (
    <div className="Counter">
      <span className="Counter__value">{value}</span>

      <div className="Counter__controls">
        <button type="button" onClick={() => dispatch(action.increment(step))}>
          Увеличить на {step}
        </button>
        <button type="button" onClick={() => dispatch(action.decrement(step))}>
          Уменьшить на {step}
        </button>
      </div>
    </div>
  );
}

export default Counter;
