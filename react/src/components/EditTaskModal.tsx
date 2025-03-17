// react/src/components/EditTaskModal.tsx
import React, { useState } from 'react';
import { Task } from './TaskList';

interface EditTaskModalProps {
  task: Task;
  onClose: () => void;
  onSave: (updatedTask: Task) => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({ task, onClose, onSave }) => {
  const [editedTask, setEditedTask] = useState<Task>(task);

  const handleSave = () => {
    onSave(editedTask);
  };

  return (
    <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Task</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onClose}
            ></button>
          </div>
          
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                value={editedTask.title}
                onChange={(e) => setEditedTask({...editedTask, title: e.target.value})}
              />
            </div>
            
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                value={editedTask.description || ""}
                onChange={(e) => setEditedTask({...editedTask, description: e.target.value})}
              />
            </div>
            
            <div className="form-check">
              <input
                id="editTaskCompleted"
                className="form-check-input"
                type="checkbox"
                checked={editedTask.completed}
                onChange={(e) => setEditedTask({...editedTask, completed: e.target.checked})}
              />
              <label htmlFor="editTaskCompleted" className="form-check-label">
                Task Completed
              </label>
            </div>
          </div>
          
          <div className="modal-footer">
            <button 
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancel
            </button>
            <button 
              className="btn btn-primary"
              onClick={handleSave}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
