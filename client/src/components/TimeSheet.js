import React from 'react';

function TimeSheet({ timesheetData }) {
  return (
    <div>
      <h2>Timesheet</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Clock In</th>
            <th>Clock Out</th>
            <th>Hours Worked</th>
          </tr>
        </thead>
        <tbody>
          {timesheetData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.clockIn}</td>
              <td>{entry.clockOut}</td>
              <td>{entry.hoursWorked}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TimeSheet;