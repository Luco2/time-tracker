const Employee = require('../models/employee');

const employeeController = {
    getAllEmployees: (req, res) => {
        Employee.fetchAll()
            .then(employees => res.status(200).json(employees))
            .catch(err => res.status(500).json({ error: err }));
    },
    
    getEmployeeById: (req, res) => {
        const employeeId = req.params.id;
        Employee.findById(employeeId)
            .then(employee => {
                if (!employee) return res.status(404).json({ error: 'Employee not found' });
                res.status(200).json(employee);
            })
            .catch(err => res.status(500).json({ error: err }));
    },
    
    addEmployee: (req, res) => {
        const { id, name, role } = req.body;
        const newEmployee = new Employee(id, name, role);
        Employee.addEmployee(newEmployee)
            .then(() => res.status(201).json({ message: 'Employee added successfully' }))
            .catch(err => res.status(500).json({ error: err }));
    },
    
    // You can add more controller methods as per your needs for updating, deleting employees etc.
};

module.exports = employeeController;