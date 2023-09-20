# Time Tracker

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation and Running](#installation-and-running)
4. [Classes](#classes)
    - [EmployeeTimeTracker](#employeetimetracker)
    - [CLI](#cli)
5. [How to Use](#how-to-use)

## Introduction
The **Time Tracker** application provides a way for employees and managers to track time. With a simple Command Line Interface (CLI), the program allows users to clock in/out and view timesheets.

## Features

### Employee Operations
- Clock in and out
- Clock in and out for lunch

### Manager Operations
- View employees list
- View timesheets
- Add a new employee
- Remove an existing employee

## Installation and Running

1. **Prerequisites**: Make sure Node.js is installed.
2. **Clone Repository**: Clone the repository and navigate to the project folder.
3. **Install Dependencies**: Run `npm install`.
4. **Run Program**: Use `node index.js` to start the program.

## Classes

### `EmployeeTimeTracker`

#### Methods

- `getEmployee(employeeId: string)`: Fetches employee data by ID.
- `addEmployee(id: string, name: string, role: string)`: Adds a new employee.
- `removeEmployee(employeeId: string)`: Removes an employee.
- `clockIn(employeeId: string)`: Clocks in an employee.
- `clockOut(employeeId: string)`: Clocks out an employee.
- `clockInForLunch(employeeId: string)`: Clocks in an employee for lunch.
- `clockOutForLunch(employeeId: string)`: Clocks out an employee from lunch.

### `CLI`

#### Methods

- `start()`: Entry point for CLI.
- `employeeMenu(employee: object)`: Shows the employee menu.
- `managerMenu(manager: object)`: Shows the manager menu.
- `clockIn(employee: object)`: Executes clock-in for an employee.
- `clockOut(employee: object)`: Executes clock-out for an employee.

## How to Use

### For Employees
1. Run the program.
2. Enter your employee ID.
3. Choose from the available options to clock in/out.

### For Managers
1. Run the program.
2. Enter your manager ID.
3. Use the manager menu to view employees, timesheets, or modify employee data.
