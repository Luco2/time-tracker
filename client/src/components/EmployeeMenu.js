import React, { useState } from 'react';
import axios from 'axios';

function EmployeeMenu({ employee, onSignOut }) {
  const [message, setMessage] = useState('');

  const performAction = async (action) => {
    try {
      const response = await axios.post(`/api/employee/${action}`, { employeeId: employee.id });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h2>Welcome, {employee.name}.</h2>
      <h3>Employee Menu</h3>
      <button onClick={() => performAction('clockIn')}>Clock In</button>
      <button onClick={() => performAction('clockInForLunch')}>Clock In for Lunch</button>
      <button onClick={() => performAction('clockOutForLunch')}>Clock Out for Lunch</button>
      <button onClick={() => performAction('clockOut')}>Clock Out</button>
      <button onClick={onSignOut}>Sign Out</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default EmployeeMenu;