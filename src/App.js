import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import CreateProject from './components/CreateProject/CreateProject';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/create-project" element={<CreateProject />} />
      </Routes>
    </Router>
  );
};

export default App;
