import React from 'react';
import { connect } from 'react-redux';
import todosFilter from './../../redux/todos/todos-actions';

const TodoFilter = ({ onTodoChange, visible }) => {
  return (
    <label>
      Фильтр по имени
      <input type="text" value={visible} onChange={onTodoChange} />
    </label>
  );
};

const mapStateToProps = state => ({
  visible: state.todos.filter,
});

const mapDispatchToProps = dispatch => ({
  onTodoChange: e => dispatch(todosFilter.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);
