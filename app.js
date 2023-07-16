import { EmployeeTimeTracker } from './EmployeeTimeTracker.js';
import { CLI } from './cli.js';

// Create instances 
const timeTracker = new EmployeeTimeTracker();
const cli = new CLI(timeTracker);

cli.start();
