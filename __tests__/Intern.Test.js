const Intern = require('../lib/Intern');

// create an intern object
describe('intern object', () => {
    // set school
    describe('school', () => {
        it('Sets the school for intern', () => {
            const school = 'UMKC';
            const result = new Intern('Chris', 5, 'cangalet@gmail.com', school);
            expect(result.school).toBe(school);
        });
    });
    // get school
     describe('getSchool', () => {
        it('can get school by calling getSchool', () =>
        {
            const school = 'UMKC';
            const result = new Intern('Chris', 5, 'cangalet@gmail.com', school);
            expect(result.getSchool()).toEqual(school);
        });
    });
    // get role
    describe('getRole', () => {
        it('can get role by calling getRole', () =>
        {
            const role = ('Intern');
            const result = new Intern(role);
            expect(result.getRole()).toEqual(role);
        });
    });
})