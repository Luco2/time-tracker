import { EmployeeTimeTracker } from './EmployeeTimeTracker.js';
import { CLI } from './Cli.js';

// Create instances 
const timeTracker = new EmployeeTimeTracker();
const cli = new CLI(timeTracker);

cli.start();
