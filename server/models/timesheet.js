class Timesheet {
    constructor() {
        this.timesheets = []; // This can be replaced with a database later
    }
    
    addEntry(employeeId, clockInTime, clockOutTime) {
        const entry = { employeeId, clockInTime, clockOutTime };
        this.timesheets.push(entry);
        return entry;
    }
    
    getEntriesByEmployeeId(employeeId) {
        return this.timesheets.filter(entry => entry.employeeId === employeeId);
    }
}

module.exports = new Timesheet(); // Exporting a singleton for simplicity
