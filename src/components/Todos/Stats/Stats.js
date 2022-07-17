import React from 'react';
import { connect } from 'react-redux';

const Stats = ({ total, completedTodo }) => {
  return (
    <div>
      <span>Общее количество : {total}</span>
      <span>Количество выполненых : {completedTodo}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  total: state.todos.items.length,
  completedTodo: state.todos.items.reduce(
    (acc, todo) => (todo.completed ? acc + 1 : acc),
    0
  ),
});

export default connect(mapStateToProps)(Stats);
