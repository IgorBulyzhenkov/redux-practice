import { Component } from 'react';
// import Form from './Form/Form';
import TodoEditor from './TodoEditor/TodoEditor';
import TodoFilter from './TodoFilter/TodoFilter';
import TodoList from './TodoList/TodoList';
import Stats from './Stats/Stats';

class TodoViews extends Component {
  state = {
    // id: shortid.generate(),
    // todos: data,
    // filter:'',
    // showModal: false,
  };

  // toggleModal = () => {
  //   return this.setState(prev => ({
  //     showModal: !prev.showModal,
  //   }));
  // };

  // addTodo = text => {
  //   if (text === '') return;
  //   const todo = {
  //     id: shortid.generate(),
  //     text,
  //     completed: false,
  //   };
  //   this.setState(prevState => ({
  //     todos: [...prevState.todos, todo],
  //   }));
  // };

  // deleteTodo = todoId => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.filter(todo => todo.id !== todoId),
  //   }));
  // };

  // toggleCompleted = todoId => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.map(todo => {
  //       if (todo.id === todoId) {
  //         return {
  //           ...todo,
  //           completed: !todo.completed,
  //         };
  //       }
  //       return todo;
  //     }),
  //   }));
  // };

  // formSubmitHandler = data => {
  //   console.log(data);
  // };

  // changeFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // getVisibleTodos = () => {
  //   const { todos, filter } = this.state;
  //   const normalizedFilter = filter;

  //   console.log(filter);

  //   return todos.filter(todo =>
  //     todo.text.toLocaleLowerCase().includes(normalizedFilter)
  //   );
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.todos !== prevState.todos) {
  //     localStorage.setItem('todos', JSON.stringify(this.state.todos));
  //   }
  // }

  // componentDidMount() {
  //   const todos = localStorage.getItem('todos');
  //   const parsedTodos = JSON.parse(todos);

  //   if (parsedTodos) this.setState({ todos: parsedTodos });
  // }
  render() {
    // const completedTodo = this.state.todos.reduce(
    //   (acc, todo) => (todo.completed ? acc + 1 : acc),
    //   0
    // );
    // const { todos, showModal } = this.state;

    // const visibleTodos = this.getVisibleTodos();
    return (
      <div>
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        <Stats />
        <TodoList />
        <TodoEditor />
        <TodoFilter
        // value={this.state.filter}
        // onTodoChange={this.changeFilter}
        />
      </div>
    );
  }
}

export default TodoViews;
