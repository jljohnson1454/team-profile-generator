const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school, role) {
        
        super(name, id, email, role);
        
        this.school = school;
        this.role = 'Intern';
    }

    getRole() {
        this.role = 'Intern';
    }
}

module.exports = Intern;

// In addition to Employee's properties and methods, Intern will also have:

// school

// getSchool()

// getRole() // Overridden to return 'Intern'