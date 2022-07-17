import { useState } from 'react';
import { useDispatch } from 'react-redux';
import todoOperations from './../../redux/todos/todos-operations';

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
    dispatch(todoOperations.addTodo(message));
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
