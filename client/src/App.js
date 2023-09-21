// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeMenu from './components/EmployeeMenu';
import ManagerMenu from './components/ManagerMenu';
import LoginForm from './components/LoginForm';
import TimeSheet from './components/TimeSheet';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/employee-menu" component={EmployeeMenu} />
        <Route path="/manager-menu" component={ManagerMenu} />
        <Route path="/timesheet" component={TimeSheet} />
        <Route path="/" component={LoginForm} />
      </Switch>
    </Router>
  );
}

export default App;
