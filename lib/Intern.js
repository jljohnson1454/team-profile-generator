const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.role = role;
    }
}

module.exports = Intern;