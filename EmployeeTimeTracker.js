import fs from 'fs';

export class EmployeeTimeTracker {  
  constructor() {    
    this.employeeData = JSON.parse(fs.readFileSync('./data/employeeData.json', 'utf8'));
    this.timesheetData = JSON.parse(fs.readFileSync('./data/timesheetData.json', 'utf8'));
  }

  saveEmployeeData() {
    fs.writeFileSync('./data/employeeData.json', JSON.stringify(this.employeeData, null, 2));
  }
  saveTimesheetData() {
    fs.writeFileSync('./data/timesheetData.json', JSON.stringify(this.timesheetData, null, 2));
  }

  getEmployee(employeeId) {
    const employee = this.employeeData.find((employee) => employee.id === employeeId);
    if (employee) {
      employee.isManager = employee.role === 'Manager';
    }
    return employee;
  }  
 
  getTimesheet(employeeId) {
    return this.timesheetData.find((timesheet) => timesheet.employeeId === employeeId);
  }

// employee operations
  clockIn(employeeId) {
    const employee = this.employeeData.find((employee) => employee.id === employeeId);
    if (employee) {
      let timesheet = this.timesheetData.find((timesheet) => timesheet.employeeId === employeeId);
      if (!timesheet) {
        timesheet = {
          employeeId: employeeId,
          timesheet: []
        };
        this.timesheetData.push(timesheet);
      }
      const hasClockedIn = timesheet.timesheet.some(entry => entry.clockOut === null && entry.lunchClockIn === null);
      if (hasClockedIn) {
        console.log('\nEmployee has already clocked in.');
      } else {
        const currentDate = new Date();
        const timesheetEntry = {
          date: currentDate.toISOString().split('T')[0],
          clockIn: currentDate.toLocaleTimeString(),
          clockOut: null,
          lunchClockIn: null,
          lunchClockOut: null
        };
        timesheet.timesheet.push(timesheetEntry);
        console.log('\nClock-in successful.');
        this.saveTimesheetData();
      }
    } else {
      console.log('\nInvalid employee ID. Please try again.');
    }
  }              

  clockOut(employeeId) {
    const employee = this.employeeData.find((employee) => employee.id === employeeId);
    if (employee) {
      const timesheet = this.getTimesheet(employeeId); 
      if (timesheet) {
        const lastEntry = timesheet.timesheet[timesheet.timesheet.length - 1];
        if (lastEntry.clockOut) {
          console.log('\nEmployee has already clocked out for the day.');
        } else {
          const currentDate = new Date();
          const clockOutTime = currentDate.toLocaleTimeString();
          lastEntry.clockOut = clockOutTime;  
          console.log('Clock-out successful.');
          this.saveTimesheetData();
        }
      } else {
        console.log('\nEmployee does not have a timesheet.');
      }
    } else {
      console.log('\nInvalid employee ID. Please try again.');
    }
  }  

  clockInForLunch(employeeId) {
    const employee = this.getEmployee(employeeId);
    if (employee) {
      const timesheet = this.getTimesheet(employeeId);
      if (timesheet && timesheet.lunchClockIn) {
        console.log('\nEmployee has already clocked in for lunch.');
        return;
      }
  
      const currentDate = new Date();
      const lunchClockInTime = currentDate.toLocaleTimeString();
  
      const lastEntry = timesheet.timesheet[timesheet.timesheet.length - 1];
  
      lastEntry.lunchClockIn = lunchClockInTime;
  
      console.log('\nClock-in for lunch successful.');
  
      this.saveTimesheetData();
    } else {
      console.log('\nInvalid employee ID. Please try again.');
    }
  }
  
  clockOutForLunch(employeeId) {
    const employee = this.employeeData.find((employee) => employee.id === employeeId);
    if (employee) {
      const timesheet = this.getTimesheet(employeeId);
  
      if (timesheet) {
        const lastEntry = timesheet.timesheet[timesheet.timesheet.length - 1];
  
        if (lastEntry.lunchClockOut) {
          console.log('\nEmployee has already clocked out for lunch.');
        } else {
          const currentDate = new Date();
          const lunchClockOutTime = currentDate.toLocaleTimeString();
  
          lastEntry.lunchClockOut = lunchClockOutTime;
  
          console.log('\nClock-out for lunch successful.');
          this.saveTimesheetData();
        }
      } else {
        console.log('\nEmployee does not have a timesheet.');
      }
    } else {
      console.log('\nInvalid employee ID. Please try again.');
    }
  }  

  // manager operations 
viewEmployees() {
  console.log('\nEmployees:');
  this.employeeData.forEach((employee) => {
    console.log(`ID: ${employee.id}, Name: ${employee.name}, Role: ${employee.role}`);
  });
}

viewTimesheet(employeeId) {
  const employee = this.employeeData.find((employee) => employee.id === employeeId);
  if (employee) {
    const timesheet = this.timesheetData.find((timesheet) => timesheet.employeeId === employeeId);
    if (timesheet) {
      console.log('\nTimesheet:');
      const formattedTimesheet = timesheet.timesheet.map((entry) => ({
        ...entry,
        lunchClockOut: entry.lunchClockOut ? entry.lunchClockOut : '', 
      }));
      console.table(formattedTimesheet, ['date', 'clockIn', 'clockOut', 'lunchClockIn', 'lunchClockOut']);
    } else {
      console.log('\nEmployee does not have a timesheet.');
    }
  } else {
    console.log('\nInvalid employee ID. Please try again.');
  }
}
// added operations
addEmployee(id, name, role) {
  const newEmployee = {
    id: id,
    name: name,
    role: role,
    isManager: role === 'Manager' 
  };
  this.employeeData.push(newEmployee);
  this.saveEmployeeData();
  console.log('\nEmployee added successfully.');
}  
  
  removeEmployee(employeeId) {
    const employeeIndex = this.employeeData.findIndex((employee) => employee.id === employeeId);
    if (employeeIndex !== -1) {
      this.employeeData.splice(employeeIndex, 1);
      this.saveEmployeeData();
      console.log('\nEmployee removed successfully.');
    } else {
      console.log('\nInvalid employee ID. Please try again.');
    }
  }
}

