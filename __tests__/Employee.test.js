const Employee = require('../lib/Employee');

test('creates a Employee super class', () => {
    const employee = new Employee('Jacob', 136114, 'jljohnson1454@gmail.com');

    expect(employee.name).toBe('Jacob');
    expect(employee.id).toBe('136114');
    expect(employee.email).toBe('jljohnson1454@gmail.com');
});