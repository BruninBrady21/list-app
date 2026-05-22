import { useState } from 'react';
import TaskList from './pages/TaskList/TaskList';
import AddTask from './pages/AddTask/AddTask';
import MainContent from './components/MainContent/MainContent';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

interface Task {
  id: number;
  name: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (taskName: string) => {
    setTasks([...tasks, { id: Date.now(), name: taskName }]);
  };

  const handleRemoveTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className="App">
      <Header />
      <MainContent>
        <h1>Task Manager</h1>
        <AddTask onAddTask={handleAddTask} />
        <TaskList 
          tasks={tasks} 
          onRemoveTask={handleRemoveTask} />
      </MainContent>
      <Footer />
    </div>
  );
}

export default App;