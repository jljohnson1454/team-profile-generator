const Employee = require('./Employee');

// manager will  have officenumber

class Manager extends Employee {
    constructor(name, id, email, officeNumber, role) {
        super (name, id, email, role);

        this.officeNumber = officeNumber;
    }

    getofficeNumber() {
        return officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;

// In addition to Employee's properties and methods, Manager will also have:

// officeNumber

// getRole() // Overridden to return 'Manager'