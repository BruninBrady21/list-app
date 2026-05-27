import { useReducer, useEffect } from 'react';
import api from './api';
import TaskList from './pages/TaskList/TaskList';
import AddTask from './pages/AddTask/AddTask';
import MainContent from './components/MainContent/MainContent';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import taskReducer from './reducers/TaskReducer';
import './App.css';

const initialState = {
  tasks: [],
};

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
    api.get('/tasks')
      .then((response) => {
        dispatch({ type: 'SET_TASKS', payload: response.data });
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  const handleAddTask = (taskName: string) => {
    api.post('/tasks', { name: taskName, completed: false })
      .then((response) => {
        dispatch({ type: 'ADD_TASK', payload: response.data });
      })
      .catch((error) => {
        console.error('Error adding task:', error);
      });
  };

  const handleRemoveTask = (id: number) => {
    api.delete(`/tasks/${id}`)
      .then(() => {
        dispatch({ type: 'REMOVE_TASK', payload: id });
      })
      .catch((error) => {
        console.error('Error removing task:', error);
      });
  };

  const handleToggleTask = (id: number) => {
    const task = state.tasks.find((t) => t.id === id);
    if (task) {
      api.put(`/tasks/${id}`, { ...task, completed: !task.completed })
        .then(() => {
          dispatch({ type: 'TOGGLE_TASK', payload: id });
        })
        .catch((error) => {
          console.error('Error toggling task:', error);
        });
    }
  };

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