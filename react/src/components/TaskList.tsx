import { useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import EditTaskModal from './EditTaskModal';

export interface Task {
  _id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:5174/api/tasks');
      if (!response.ok) throw new Error('Failed to fetch tasks');
      const data = await response.json();
      setTasks(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  // Delete task
  const deleteTask = async (taskId: string) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;

    try {
      const response = await fetch(`http://localhost:5174/api/tasks/${taskId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete task");
      setTasks(prevTasks => prevTasks.filter(task => task._id !== taskId));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error deleting task");
    }
  };

  // Update task
  const updateTask = async (updatedTask: Task) => {
    try {
      const response = await fetch(`http://localhost:5174/api/tasks/${updatedTask._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
      });

      if (!response.ok) throw new Error("Failed to update task");

      setTasks(prevTasks =>
        prevTasks.map(task => (task._id === updatedTask._id ? updatedTask : task))
      );
      setSelectedTaskId(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error updating task");
    }
  };

  const selectedTask = tasks.find(task => task._id === selectedTaskId);

  if (loading) return <div className="text-center mt-4">Loading tasks...</div>;
  if (error) return <div className="alert alert-danger mt-4">Error: {error}</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Task List</h2>

      {tasks.length === 0 ? (
        <div className="alert alert-info">No tasks available.</div>
      ) : (
        <div className="list-group">
          {tasks.map(task => (
            <TaskItem
              key={task._id}
              task={task}
              onDelete={deleteTask}
              onEdit={() => setSelectedTaskId(task._id)}
            />
          ))}
        </div>
      )}

      {selectedTask && (
        <EditTaskModal
          task={selectedTask}
          onClose={() => setSelectedTaskId(null)}
          onSave={updateTask}
        />
      )}
    </div>
  );
};

export default TaskList;
