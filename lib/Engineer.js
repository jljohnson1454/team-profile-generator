// Extends Employee
const Employee = require('./Employee');

class Engineer extends Employee {
        constructor(name, id, email, git) {
            this.name = name;
            this.id = id;
            this.email = email;
            this.git = git;
    }

}

module.exports = Engineer;