const Intern = require('../lib/Intern');

test('creates new intern object', () =>{
    intern = new Intern('name', 'Intern', 'id', 'uoft', 'email');

    expect(intern.getSchool()).toBe('uoft');
    expect(intern.getRole()).toBe('Intern')
})