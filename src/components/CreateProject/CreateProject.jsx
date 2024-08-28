import React, { useState } from 'react';
import './CreateProject.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faBell } from '@fortawesome/free-solid-svg-icons';
import CreatePopUp from '../CreatePopUp/CreatePopUp';

const CreateProject = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleOpenModal = () => {
    setModalVisible(true);
    console.log('Modal Opened');
  };

  const handleCreateProject = () => {
    setModalVisible(false); 
  };

  return (
    <div className="create-project-page">
      <header className="header">
        <img src="/path/to/logo.png" alt="Ques.AI Logo" className="logo" />
        <div className="header-icons">
          <span>
            <FontAwesomeIcon icon={faGear} />
          </span>
          <span>
            <FontAwesomeIcon icon={faBell} />
          </span>
        </div>
      </header>
      <div className="main-content">
        <h1>Create a New Project</h1>
        <img src="/path/to/illustration.png" alt="Project Illustration" className="illustration" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="new_project">
          <button className="create-project-button" onClick={handleOpenModal}>
            + Create New Project
          </button>
          <CreatePopUp
            isVisible={isModalVisible}
            onClose={() => setModalVisible(false)}
            onCreate={handleCreateProject} 
            />
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
