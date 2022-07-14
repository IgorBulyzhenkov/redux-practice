import Counter from './redux/counter/Counter';
import TodoViews from './Todos/TodoViews';

export const App = () => {
  return (
    <div>
      <Counter />
      <TodoViews />
    </div>
  );
};
