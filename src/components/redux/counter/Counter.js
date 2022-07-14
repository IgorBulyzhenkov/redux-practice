import React from 'react';
import { connect } from 'react-redux';
import * as action from './counter-actions';

const { increment, decrement } = action;

function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <div className="Counter">
      <span className="Counter__value">{value}</span>

      <div className="Counter__controls">
        <button type="button" onClick={() => onIncrement(step)}>
          Увеличить на {step}
        </button>
        <button type="button" onClick={() => onDecrement(step)}>
          Уменьшить на {step}
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: value => dispatch(increment(value)),
    onDecrement: value => dispatch(decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
