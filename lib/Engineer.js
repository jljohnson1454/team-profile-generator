// Extends Employee
const Employee = require('./Employee');

class Engineer extends Employee {
        constructor(name, id, email, git) {
            this.name = name;
            this.id = id;
            this.email = email;
            this.git = git;

            super(name, id, email);
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