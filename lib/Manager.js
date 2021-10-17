const Employee = require('./Employee');

// manager will  have officenumber

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super (name, id, email);

        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }

    // getRole() {
    //     return 'Manager';
    // }

}

module.exports = Manager;

// In addition to Employee's properties and methods, Manager will also have:

// officeNumber

// getRole() // Overridden to return 'Manager'