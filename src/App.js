import './App.css';
import { TodoProvider } from './todoContext';
import TodoList from './TodoList';
import AddTask from './AddTask';

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <AddTask />
        <hr />
        <h1>TODO List</h1>
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
