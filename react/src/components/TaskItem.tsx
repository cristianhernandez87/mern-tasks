import React from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import { Task } from './TaskList';

interface TaskItemProps {
  task: Task;
  onDelete: (taskId: string) => void;
  onEdit: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onEdit }) => {
  return (
    <div className="list-group-item list-group-item-action mb-3 shadow-sm">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h5 className="mb-1">{task.title}</h5>
          <p className="mb-1 text-muted">{task.description}</p>
          <small className="text-muted">
            Created on: {new Date(task.createdAt).toLocaleDateString()}
          </small>
        </div>
        
        <div className='mx-2 d-flex flex-column'>
          <span 
            className={`badge mb-2 ${task.completed ? 'badge-success' : 'badge-warning'} badge-pill`}
          >
            {task.completed ? 'Completed' : 'Pending'}
          </span>
          <div className="d-flex gap-2 justify-content-end">
            <button 
              className="btn btn-outline-primary btn-sm mr-2"
              onClick={() => onEdit(task)}
            >
              <FaEdit />
            </button>
            <button 
              className="btn btn-outline-danger btn-sm"
              onClick={() => onDelete(task._id)}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
