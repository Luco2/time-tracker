const express = require('express');
const router = express.Router();
const Timesheet = require('../models/timesheet');

router.post('/add', (req, res) => {
    const { employeeId, clockInTime, clockOutTime } = req.body;
    if (!employeeId || !clockInTime || !clockOutTime) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    
    const entry = Timesheet.addEntry(employeeId, clockInTime, clockOutTime);
    res.status(201).json(entry);
});

router.get('/:employeeId', (req, res) => {
    const { employeeId } = req.params;
    const entries = Timesheet.getEntriesByEmployeeId(employeeId);
    res.status(200).json(entries);
});

module.exports = router;