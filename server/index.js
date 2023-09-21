const express = require('express');
const cors = require('cors');
const path = require('path');
const employeeRouter = require('./routes/employee');
const timesheetRouter = require('./routes/timesheet');

const app = express();

// Middlewares
app.use(cors()); // Enable All CORS Requests
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/employee', employeeRouter);
app.use('/api/timesheet', timesheetRouter);

// Serve React App
const buildPath = path.join(__dirname, '..', 'client', 'build');
app.use(express.static(buildPath));
app.get('*', (req, res) => res.sendFile(path.join(buildPath, 'index.html')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

module.exports = app;
