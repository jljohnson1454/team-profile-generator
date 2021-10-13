const Engineer = require('../lib/Engineer');

test('creates an engineer', () => {
    const engineer = new Engineer('Jacob', 136114, 'jljohnson1454@gmail.com');

    expect(engineer.name).toBe('Jacob');
    expect(engineer.id).toBe('136114');
    expect(engineer.email).toBe('jljohnson1454@gmail.com');
    expect(engineer.git).toBe('jljohnson1454');
  });