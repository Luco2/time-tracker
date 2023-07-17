import { EmployeeTimeTracker } from './EmployeeTimeTracker.js';
import { CLI } from './cli.js';

const timeTracker = new EmployeeTimeTracker();
const cli = new CLI(timeTracker);

cli.start();
