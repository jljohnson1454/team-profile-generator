const Engineer = require('../lib/Engineer');

test('creates an engineer', () => {
    const employee = new Engineer('Jacob', 136114, 'jljohnson1454@gmail.com');

    expect(employee.name).toBe('Jacob');
    expect(employee.id).toBe('136114');
    expect(employee.email).toBe('jljohnson1454@gmail.com');
  });