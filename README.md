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
A dedicated component that renders functionalities and operations that an employee can perform, such as clocking in/out and managing lunch breaks.

### ManagerMenu
This component is crafted to offer managers a dedicated interface, allowing them to execute various administrative operations, like viewing employee lists and observing timesheets.

### LoginForm
An interactive component designed to facilitate users in logging into the application by entering their employee ID and selecting their role.

## Backend Logic
The server-side logic, responsible for managing employees, their timesheets, and executing various operations, is efficiently handled by the `EmployeeTimeTracker` class located in the `server` directory. This class is packed with methods that streamline the management of employees, their clock-in/out times, and meticulously maintain timesheets.

## Usage

### Login:
- **Step 1:** Navigate to the login page.
- **Step 2:** Enter your employee ID.
- **Step 3:** Select your role and proceed.

### Navigate:
- Utilize the displayed menu to navigate through different options and execute various operations assigned to your role.

## Contributing
Contributions are wholeheartedly welcomed! Feel free to submit a pull request for minor enhancements or bug fixes. For significant changes or new features, it’s encouraged to open an issue first to discuss the proposed modifications.

## License
This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
