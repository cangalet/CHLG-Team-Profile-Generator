const Employee = require('../lib/Employee');

//create an employee object
describe('employee', () => {
    // set name
    describe('name', () => {
        it('should set name', () =>
        {
            const name = ('Chris');
            const result = new Employee(name);
            expect(result.name).toBe(name);
        });
    });
    // set id
    describe('id', () => {
        it('should set id', () =>
        {
            const id = 5;
            const result = new Employee('Chris', id);
            expect(result.id).toBe(id);
        });
    });
    // set email
    describe('email', () => {
        it('should set email', () =>
        {
            const email = ('cangalet@gmail.com');
            const result = new Employee('Chris', 5, email);
            expect(result.email).toBe(email);
        });
    });
    // get name
    describe('getName', () => {
        it('can get name by calling getName', () =>
        {
            const name = ('Chris');
            const result = new Employee(name);
            expect(result.getName()).toEqual(name);
        });
    });
    // get id
    describe('getID', () => {
        it('can get ID by calling getID', () =>
        {
            const id = 5;
            const result = new Employee('Chris', id);
            expect(result.getID()).toEqual(id);
        });
    });
    // get email
    describe('getEmail', () => {
        it('can get emailcl by calling getEmail', () =>
        {
            const email = ('cangalet@gmail.com');
            const result = new Employee('Chris', 5, email);
            expect(result.getEmail()).toEqual(email);
        });
    });
    // get role
    describe('getRole', () => {
        it('can get role by calling getRole', () =>
        {
            const role = ('Employee');
            const result = new Employee(role);
            expect(result.getRole()).toEqual(role);
        });
    });
});