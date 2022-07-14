import './TodoList.css';
import { connect } from 'react-redux';
import todos from './../../redux/todos/todos-actions';

function TodoList({ todos, onDeleteTodo, onToggleCompleted }) {
  return (
    <div className="TodoList">
      {/* <h2>Практика с классами</h2> */}
      <ul className="TodoList__list">
        {todos.map(({ id, text, completed }) => {
          return (
            <li key={id} className="TodoList__item">
              <input
                type="checkbox"
                className="TodoList__checkbox"
                checked={completed}
                onChange={() => onToggleCompleted(id)}
              ></input>
              <p className="TodoList__title">{text}</p>
              <button
                type="button"
                className="TodoList__button"
                onClick={() => onDeleteTodo(id)}
              >
                Удалить
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}


const getVisibleTodos = (allTodos, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allTodos.filter(todo =>
    todo.text.toLocaleLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = state => {
  const { filter, items } = state.todos;

  const visibleTodos = getVisibleTodos(items, filter);
  return { todos: visibleTodos };
};

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(todos.addDelete(id)),
  onToggleCompleted: id => dispatch(todos.toggleCompleted(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
