import readline from 'readline';

export class CLI {
  constructor(timeTracker) {
    this.timeTracker = timeTracker;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  // entry point for CLI
  start() {  
    this.rl.question('Please enter your employee ID: ', (employeeId) => {
      const employee = this.timeTracker.getEmployee(employeeId);
      if (employee) {
        if (employee.isManager) {
          this.managerMenu(employee);
        } else {
          this.employeeMenu(employee);
        }
      } else {
        console.log('Invalid employee ID. Please try again.');
        this.start();
      }
    });
  }

  employeeMenu(employee) {
    console.log(`\nWelcome, ${employee.name}.`);
    console.log('\nEmployee Menu');
    console.log('\n1. Clock In');
    console.log('2. Clock In to Lunch');
    console.log('3. Clock Out of Lunch');
    console.log('4. Clock Out');
    console.log('5. Sign Out');
    console.log('6. Exit');
    this.rl.question('\nPlease select an option: ', (option) => {
      option = option.trim().toLowerCase();
      switch (option) {
        case '1':
        case 'clock in':
          this.clockIn(employee);
          break;
        case '2':
        case 'clock in to lunch':
          this.clockInForLunch(employee);
          break;
        case '3':
        case 'clock out of lunch':
          this.clockOutForLunch(employee);
          break;
        case '4':
        case 'clock out':
          this.clockOut(employee);
          break;
        case '5':
        case 'go back':
          this.start();
          break;
        case '6':
        case 'sign out':
          this.signOut();
          break;
        default:
          console.log('Invalid option. Please try again.');
          this.displayEmployeeMenu(employee);
          break;
      }
    });
  }   
  
  managerMenu(manager) {
    console.log(`\nWelcome, ${manager.name}.`);
    console.log('\nManager Menu');
    console.log('\n1. View Employees');
    console.log('2. View Timesheets');
    console.log('3. Add Employee');
    console.log('4. Remove Employee');
    console.log('5. Clock In');
    console.log('6. Clock In to Lunch');
    console.log('7. Clock Out of Lunch');
    console.log('8. Clock Out');
    console.log('9. Sign Out');
    console.log('10. Exit');

    this.rl.question('\nPlease select an option: ', (option) => {
      option = option.trim().toLowerCase();
      switch (option) {
        case '1':
        case 'view employees':
          this.viewEmployees(manager);
          break;
        case '2':
        case 'view timesheet':
          this.displayAllTimesheets(manager);
          this.displayManagerMenu(manager);
          break;
        case '3':
        case 'add employee':
          this.rl.question('Please enter the employee ID: ', (id) => {
            this.rl.question('Please enter the employee name: ', (name) => {
              this.rl.question('Please enter the employee role: ', (role) => {
                this.timeTracker.addEmployee(id, name, role);
                this.displayManagerMenu(manager);
              });
            });
          });
          break;
        case '4':
        case 'remove employee':
          this.rl.question('Please enter the employee ID to remove: ', (employeeId) => {
            this.timeTracker.removeEmployee(employeeId);
            this.displayManagerMenu(manager);
          });
          break;
        case '5':
        case 'clock in':
          this.timeTracker.clockIn(manager.id); 
          this.displayManagerMenu(manager);
          break;
          case '6':
            case 'clock in to lunch':
              this.timeTracker.clockInForLunch(manager.id); 
              this.displayManagerMenu(manager);
              break;
            case '7':
            case 'clock out of lunch':
              this.timeTracker.clockOutForLunch(manager.id);
              this.displayManagerMenu(manager);
              break;
        case '8':
        case 'clock out':
          this.timeTracker.clockOut(manager.id); 
          this.displayManagerMenu(manager);
          break;
        case '9':
        case 'go back':
          this.start();
          break;
        case '10':
        case 'sign out':
          this.signOut();
          break;
        default:
          console.log('\nInvalid option. Please try again.');
          this.displayManagerMenu(manager);
      }
    });
  }  

  displayEmployeeMenu(employee) {
    this.rl.question('\nPress Enter to go back to the menu.', () => {
      this.employeeMenu(employee);
    });
  }
  
  displayManagerMenu(manager) {
    this.rl.question('\nPress Enter to go back to the menu.', () => {
      this.managerMenu(manager);
    });
  }

// Employee operations 
  clockIn(employee) {
    this.timeTracker.clockIn(employee.id);
    this.displayEmployeeMenu(employee);
  }

  clockInForLunch(employee) {
    this.timeTracker.clockInForLunch(employee.id);
    this.displayEmployeeMenu(employee);
  }

  clockOutForLunch(employee) {
    this.timeTracker.clockOutForLunch(employee.id);
    this.displayEmployeeMenu(employee);
  }

  clockOut(employee) {
    this.timeTracker.clockOut(employee.id);
    this.displayEmployeeMenu(employee);
  }

  viewEmployees(manager) {
    this.timeTracker.viewEmployees();
    this.viewTimesheet(manager);
  }

// manager operations
  viewTimesheet(manager) {
    this.rl.question('\nPlease enter an employee ID to view their timesheet: ', (employeeId) => {
      this.timeTracker.viewTimesheet(employeeId);
      this.displayManagerMenu(manager);
    });
  }

  displayAllTimesheets() {
    console.log('All Timesheets:');
    this.timeTracker.employeeData.forEach((employee) => {
      console.log(`Timesheet for ${employee.name}:`);
      const timesheet = this.timeTracker.getTimesheet(employee.id);
      if (timesheet && timesheet.timesheet.length > 0) {
        const formattedTimesheet = timesheet.timesheet.map((entry) => ({
          Date: entry.date,
          'Clock In': entry.clockIn,
          'Lunch Start': entry.lunchClockIn,
          'Lunch End': entry.lunchClockOut,
          'Clock Out': entry.clockOut
        }));
        console.table(formattedTimesheet);
      } else {
        console.log('\nNo timesheet available.');
      }
      console.log();
    });
  }   

  signOut() {
    console.log('Signed out successfully.');
    this.rl.close();
  }
}