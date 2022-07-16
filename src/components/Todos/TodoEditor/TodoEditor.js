import { useState } from 'react';
import { useDispatch } from 'react-redux';
import todoActions from './../../redux/todos/todos-actions';

function TodoEditor() {
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    setMessage(e.currentTarget.value);
  };

  const reset = () => {
    setMessage('');
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(todoActions.addTodo(message));
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={message} onChange={handleChange}></textarea>
      <button type="submit">Добавить</button>
    </form>
  );
}

export default TodoEditor;
