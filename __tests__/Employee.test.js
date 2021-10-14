const Employee = require('../lib/Employee.js');

test('input a name', () => {
    const employee = new Employee('Jacob', 136114, 'jljohnson1454@gmail.com');
    expect(employee.name).toBe('Jacob');
});

test('get Name Method', () => {
    const employee = new Employee('Jacob');
    expect(employee.getName()).toBe('Jacob');
})

test('input a id', () => {
    const employee = new Employee('Jacob', 136114, 'jljohnson1454@gmail.com');
    expect(employee.id).toBe(136114);
});

test('input an email', () => {
    const employee = new Employee('Jacob', 136114, 'jljohnson1454@gmail.com');
    expect(employee.email).toBe('jljohnson1454@gmail.com');
});

test('input a role', () => {
    const employee = new Employee('Jacob', 136114, 'jljohnson1454@gmail.com', 'Intern');
    expect(employee.role).toBe('Intern');
});




// test('imports employee info from input', () => {
// const employee = new Employee();

//     expect(employee.name).toEqual(expect.any(String));
//     expect(employee.id).toEqual(expect.any(Number));
//     expect(employee.email).toEqual(expect.any(String));

//  });

// getName()

// getId()

// getEmail()

// getRole()

