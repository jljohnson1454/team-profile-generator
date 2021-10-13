const Employee = require('../lib/Employee.js');

test('creates an Employee super class', () => {
    const employee = new Employee('Jacob', 136114, 'jljohnson1454@gmail.com');

    expect(employee.name).toBe('Jacob');
    expect(employee.id).toBe(136114);
    expect(employee.email).toBe('jljohnson1454@gmail.com');
});




// test('imports employee info from input', () => {
//     const employee = new Employee();

//     expect(employee.name).toBe(String);
//     expect(employee.id).toEqual(expect.any(Number));
//     expect(employee.email).toBe(String);

// });

// getName()

//getName('')

// getId()

// getEmail()

// getRole()

