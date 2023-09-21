const fs = require('fs');
const path = require('path');

class Employee {
    constructor(id, name, role) {
        this.id = id;
        this.name = name;
        this.role = role;
    }
    
    static fetchAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(__dirname, '../data', 'employeeData.json'), 'utf-8', (err, data) => {
                if (err) reject('Unable to read employee data');
                resolve(JSON.parse(data));
            });
        });
    }
    
    static findById(id) {
        return Employee.fetchAll()
            .then(employees => employees.find(emp => emp.id === id));
    }
    
    static addEmployee(newEmployee) {
        return Employee.fetchAll()
            .then(employees => {
                employees.push(newEmployee);
                return new Promise((resolve, reject) => {
                    fs.writeFile(path.join(__dirname, '../data', 'employeeData.json'), JSON.stringify(employees), 'utf-8', err => {
                        if (err) reject('Unable to write to employee data');
                        resolve();
                    });
                });
            });
    }

    // You can continue to add more methods as per your needs like updateEmployee, deleteEmployee etc.
}

module.exports = Employee;