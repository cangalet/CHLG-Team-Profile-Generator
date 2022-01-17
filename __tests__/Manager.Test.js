const Manager = require('../lib/Manager');
const Employee = require("../lib/Employee");

// create a manager object
describe('manager', () => {
    // set office number
    describe('officeNumber', () => {
        it('Sets the office number for the Manager', () => {
            const officeNumber = 101;
            const result = new Manager('Chris', 5, 'cangalet@gmail.com', officeNumber);
            expect(result.officeNumber).toBe(officeNumber);
        });
    });
    // get office number
     describe('getOfficeNumber', () => {
        it('can get office number by calling getOfficeNumber', () =>
        {
            const officeNumber = 101;
            const result = new Manager('Chris', 5, 'cangalet@gmail.com', officeNumber);
            expect(result.getOfficeNumber()).toEqual(officeNumber);
        });
    });
    // get role
    describe('getRole', () => {
        it('can get role by calling getRole', () =>
        {
            const role = ('Manager');
            const result = new Manager(role);
            expect(result.getRole()).toEqual(role);
        });
    });
})