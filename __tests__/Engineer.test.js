const Engineer = require('../lib/Engineer');

test('creates new engineer class', () => {
    engineer = new Engineer('name', 'Engineer', 'id', 'Raj', 'email');

    expect(engineer.getGithub()).toBe('Raj');
    expect(engineer.getRole()).toBe('Engineer');
})