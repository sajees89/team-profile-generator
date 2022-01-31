const Employee = require("../lib/Employee.js");

test('creates employee object', () => {
    const employee = new Employee('Sean', '1', 'test@gmail.com', 'Employee');

    expect(employee.getName()).toBe('Sean');
    expect(employee.getId()).toBe('1');
    expect(employee.getEmail()).toBe('test@gmail.com');
    expect(employee.getRole()).toBe('Employee');
}); 