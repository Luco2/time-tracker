# Employee Time Tracker

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
  - [Employee Operations](#employee-operations)
  - [Manager Operations](#manager-operations)
- [Technologies Used](#technologies-used)
- [Installation and Running](#installation-and-running)
- [Components](#components)
  - [EmployeeMenu](#employeemenu)
  - [ManagerMenu](#managermenu)
  - [LoginForm](#loginform)
- [Backend Logic](#backend-logic)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction
Employee Time Tracker is a sophisticated web application crafted to enable employees to accurately clock in/out, while providing managerial staff the capabilities to manage employees, view their timesheets, and administer overall attendance.

## Features

### Employee Operations
- **Clock In/Out:** Allows employees to record their working hours.
- **Clock In/Out for Lunch:** Enables employees to clock in/out for their lunch break.

### Manager Operations
- **View Employee List:** Provides a comprehensive list of all employees.
- **View Timesheets of Employees:** Enables viewing of detailed timesheets of each employee.
- **Add/Remove Employees:** Provides functionalities to add new employees or remove existing ones.

## Technologies Used
- **React:** For building the user interface.
- **Node.js:** Backend server environment.
- **Express:** Web framework used in conjunction with Node.js.
- **axios:** For making HTTP requests.
- **react-router-dom:** For routing and navigation within the application.

## Installation and Running
```sh
# Clone this repository
$ git clone <repository-url>

# Go into the repository
$ cd employee-timetracker

# Install dependencies for the server
$ cd server && npm install

# Install dependencies for the client
$ cd ../client && npm install

# Run the app
$ npm start

## Components

### EmployeeMenu
A dedicated component that offers functionalities and operations that an employee can perform, such as clocking in/out and managing lunch breaks.

### ManagerMenu
This component is designed to provide managers with a dedicated interface, allowing them to perform various administrative operations such as viewing employee lists and timesheets.

### LoginForm
This interactive component facilitates users in logging into the application by entering their employee ID and selecting their role.

## Backend Logic
The backend logic for managing employees, their timesheets, and performing various operations is handled by the EmployeeTimeTracker class in the server directory. This class contains methods to manage employees, their clock-in/out times, and timesheets.

## Usage
Login: Start by navigating to the login page and enter your employee ID. Select your role and proceed.
Navigate: Use the rendered menu to navigate through different options and perform various operations available to your role.

## Contributing
We welcome contributions! Please feel free to submit a pull request for minor improvements or bug fixes. For major changes or new features, open an issue first to discuss the proposed change.

## License
MIT
