import { Component } from 'react';
import { connect } from 'react-redux';
import TodoEditor from './TodoEditor/TodoEditor';
import TodoFilter from './TodoFilter/TodoFilter';
import TodoList from './TodoList/TodoList';
import Stats from './Stats/Stats';
import operationReduce from '../redux/todos/todos-operations';

class TodoViews extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div>
        <Stats />
        <TodoList />
        <TodoEditor />
        <TodoFilter />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(operationReduce.fetchTodos()),
});

export default connect(null, mapDispatchToProps)(TodoViews);
