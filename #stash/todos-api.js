import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040/';

const fetchTodos = () => {
  return axios.get('/todos').then(res => res.data);
};



