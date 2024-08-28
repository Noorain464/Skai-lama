import React, { useState } from 'react';
import './CreatePopUp.css';

const CreatePopUp = ({ isVisible, onClose, onCreate }) => {
  const [projectName, setProjectName] = useState('');
  const [error, setError] = useState('');

  const handleCreate = () => {
    if (!projectName.trim()) {
      setError("Project Name Can't be empty");
    } else {
      setError('');
      onCreate(projectName); 
      onClose(); 
    }
  };

  if (!isVisible) return null; 
  return (
    <div className="popup">
      <div className="content">
        <h2>Create Project</h2>
        <div className="input-group">
          <label htmlFor="projectName">Enter Project Name:</label>
          <input
            type="text"
            id="projectName"
            placeholder="Type here"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          {error && <p className="error-text">{error}</p>}
        </div>
        <div className="footer">
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="create-button" onClick={handleCreate}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePopUp;
