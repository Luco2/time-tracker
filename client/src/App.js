import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeMenu from './components/EmployeeMenu';
import ManagerMenu from './components/ManagerMenu';
import LoginForm from './components/LoginForm';
import TimeSheet from './components/TimeSheet';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/employee-menu" element={<EmployeeMenu />} />
        <Route path="/manager-menu" element={<ManagerMenu />} />
        <Route path="/timesheet" element={<TimeSheet />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;