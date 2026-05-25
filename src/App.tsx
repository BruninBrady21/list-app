import { useReducer } from 'react';
import TaskList from './pages/TaskList/TaskList';
import AddTask from './pages/AddTask/AddTask';
import MainContent from './components/MainContent/MainContent';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import taskReducer from './reducers/TaskReducer';
import './App.css';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

const initialState = {
  tasks: [],
};

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const handleAddTask = (taskName: string) => {
    dispatch({ type: 'ADD_TASK', payload: taskName });
  };

  const handleRemoveTask = (id: number) => {
    dispatch({ type: 'REMOVE_TASK', payload: id });
  };

  const handleToggleTask = (id: number) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  }

  return (
    <div className="App">
      <Header />
      <MainContent>
        <h1>Pending</h1>
        <AddTask onAddTask={handleAddTask} />
        <TaskList 
          tasks={state.tasks} 
          onRemoveTask={handleRemoveTask}
          onToggleTask={handleToggleTask}
        />
      </MainContent>
      <Footer />
    </div>
  );
}

export default App;