import './TodoList.css';
import { useSelector, useDispatch } from 'react-redux';
import todosOperations from './../../redux/todos/todos-operations';

const getVisibleTodos = (allTodos, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allTodos.filter(todo =>
    todo.text.toLowerCase().includes(normalizedFilter)
  );
};

function TodoList() {
  const todos = useSelector(state =>
    getVisibleTodos(state.todos.items, state.todos.filter)
  );
  const isLoading = useSelector(state => state.todos.loading);
  const dispatch = useDispatch();
  const err = useSelector(state => state.todos.error);

  const onDeleteTodo = id => dispatch(todosOperations.deleteTodo(id));
  const onToggleCompleted = arg => dispatch(todosOperations.toggleTodo(arg));

  return (
    <div className="TodoList">
      <div className="Loading">
        <h2>Практика REDUX--API</h2>
        {isLoading && <p>...LOADING</p>}
      </div>
      {err && <p>Error {err.message}</p>}
      <ul className="TodoList__list">
        {todos.map(({ id, text, completed }) => {
          return (
            <li key={id} className="TodoList__item">
              <input
                type="checkbox"
                className="TodoList__checkbox"
                checked={completed}
                onChange={() => {
                  onToggleCompleted({ id, completed: !completed });
                }}
              ></input>
              <p className="TodoList__title">{text}</p>
              <button
                type="button"
                className="TodoList__button"
                onClick={() => {
                  onDeleteTodo(id);
                }}
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

export default TodoList;
