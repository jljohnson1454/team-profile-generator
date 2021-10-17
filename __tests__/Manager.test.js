const Manager = require('../lib/Manager');

test('this is the manager class', () => {
    const manager = new Manager('Jacob', 136114, 'jljohnson1454@gmail.com', 95)
    
    expect(manager.name).toBe('Jacob');
    expect(manager.id).toBe(136114);
    expect(manager.email).toBe('jljohnson1454@gmail.com');
    expect(manager.officeNumber).toBe(95);
    

});


