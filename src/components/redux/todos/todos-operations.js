import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import todosActions from './todos-actions';

// const {
// fetchTodoRequest,
// fetchTodoSuccess,
// fetchTodoError,
// addTodoRequest,
// addTodoSuccess,
// addTodoError,
// deleteRequest,
// deleteSuccess,
// deleteError,
// toggleRequest,
// toggleSuccess,
// toggleError,
// } = todosActions;

axios.defaults.baseURL = 'http://localhost:4040/';

// const fetchTodos = () => dispatch => {
//   dispatch(fetchTodoRequest());

//   axios
//     .get('/todos')
//     .then(({ data }) => dispatch(fetchTodoSuccess(data)))
//     .catch(err => dispatch(fetchTodoError(err.message)));
// };

const fetchTodos = createAsyncThunk(
  'todo/fetchTodo',

  async (_, { rejectWithValue }) => {
    try {
      const todo = await axios.get('/todos');
      return todo.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const addTodo = createAsyncThunk('todo/addTodo', async text => {
  const todo = { text, completed: false };
  const dataAdd = await axios.post('/todos', todo);
  return dataAdd.data;
});

// const addTodo = text => dispatch => {
//   const todo = { text, completed: false };

//   dispatch(addTodoRequest());

//   axios
//     .post('/todos', todo)
//     .then(({ data }) => dispatch(addTodoSuccess(data)))
//     .catch(err => dispatch(addTodoError(err.message)));
// };

const deleteTodo = createAsyncThunk('todo/deleteTodo', async todoId => {
  await axios.delete(`/todos/${todoId}`);
  console.log(todoId);
  return todoId;
});
// const deleteTodo = todoId => dispatch => {
//   dispatch(deleteRequest());

// axios
//   .delete(`/todos/${todoId}`)
//     .then(() => dispatch(deleteSuccess(todoId)))
//     .catch(err => dispatch(deleteError(err.message)));
// };

const toggleTodo = createAsyncThunk(
  'todo/toggleTodo',
  async ({ id, completed }) => {
    const update = { completed };
    const toggle = await axios.patch(`/todos/${id}`, update);
    console.log(toggle);
    return toggle.data;
  }
);

// const toggleTodo =
//   ({ id, completed }) =>
//   dispatch => {
//     const update = { completed };

//     dispatch(toggleRequest());

//     axios
//       .patch(`/todos/${id}`, update)
//       .then(({ data }) => dispatch(toggleSuccess(data)))
//       .catch(err => dispatch(toggleError(err.message)));
//   };

const operation = { addTodo, deleteTodo, toggleTodo, fetchTodos };

export default operation;
