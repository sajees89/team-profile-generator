const Manager = require('../lib/Manager');

test('Creates a manager class', () => {
    const manager = new Manager('Sean', 1, 'sean@test', "30", 'Manager' );

    expect(manager.getOfficeNumber()).toBe("30");
    expect(manager.getRole()).toBe('Manager');
});