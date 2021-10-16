// Extends Employee
const Employee = require('./Employee');

class Engineer extends Employee {
        constructor(name, id, email, git) {
            super(name, id, email);

            this.git = git;
    }

    getGithub() {
        return this.git;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;

// In addition to Employee's properties and methods, Engineer will also have:

// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'