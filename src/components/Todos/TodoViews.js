import { Component } from 'react';
// import Form from './Form/Form';
import TodoEditor from './TodoEditor/TodoEditor';
import TodoFilter from './TodoFilter/TodoFilter';
import TodoList from './TodoList/TodoList';
import Stats from './Stats/Stats';

class TodoViews extends Component {
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

export default TodoViews;
