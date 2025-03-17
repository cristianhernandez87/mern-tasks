import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <div className="container mt-4">
        <h1 className="text-center mb-4">MERN Tasks</h1>
        <AddTaskForm onTaskAdded={() => window.location.reload()} /> {/* Actualizar lista al agregar */}
        <TaskList />
      </div>
    </div>
  );
}

export default App;