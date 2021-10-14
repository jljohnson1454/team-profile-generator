const Intern = require('../lib/Intern');

test('this is the intern class', () => {
    const intern = new Intern('Jacob', 136114, 'jljohnson1454@gmail.com', 'UT Boot Camp', 'Intern')
    
    expect(intern.name).toBe('Jacob');
    expect(intern.id).toBe(136114);
    expect(intern.email).toBe('jljohnson1454@gmail.com');
    expect(intern.school).toBe('UT Boot Camp');
    expect(intern.role).toBe('Intern');

})