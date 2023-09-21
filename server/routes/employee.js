// server/routes/employee.js
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const employeeDataPath = path.join(__dirname, '../data/employeeData.json');

router.get('/', (req, res) => {
  const rawData = fs.readFileSync(employeeDataPath);
  const employees = JSON.parse(rawData);
  res.json(employees);
});

// Additional routes and middleware can go here

module.exports = router;
