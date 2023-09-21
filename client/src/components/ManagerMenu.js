import React, { useState } from 'react';
import axios from 'axios';

function ManagerMenu({ manager, onSignOut }) {
  const [message, setMessage] = useState('');
  const [employeeId, setEmployeeId] = useState('');

  const viewEmployees = async () => {
    try {
      const response = await axios.get('/api/manager/employees');
      setMessage(response.data.employees);
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  const viewTimesheet = async () => {
    try {
      const response = await axios.get(`/api/manager/timesheet/${employeeId}`);
      setMessage(response.data.timesheet);
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  const addEmployee = async (id, name, role) => {
    try {
      const response = await axios.post('/api/manager/addEmployee', { id, name, role });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  const removeEmployee = async () => {
    try {
      const response = await axios.post('/api/manager/removeEmployee', { employeeId });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h2>Welcome, {manager.name}.</h2>
      <h3>Manager Menu</h3>
      <button onClick={viewEmployees}>View Employees</button>
      <button onClick={viewTimesheet}>View Timesheet</button>
      <button onClick={addEmployee}>Add Employee</button>
      <button onClick={removeEmployee}>Remove Employee</button>
      <button onClick={onSignOut}>Sign Out</button>
      {message && <p>{message}</p>}
      <input type="text" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} placeholder="Employee ID" />
    </div>
  );
}

export default ManagerMenu;