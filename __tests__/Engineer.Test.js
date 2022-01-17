const Engineer = require('../lib/Engineer');

// create an engineer object
describe('engineer', () => {
    // set github
    describe('github', () => {
        it('Sets the github username for the Engineer', () => {
            const github = 'cangalet';
            const result = new Engineer('Chris', 5, 'cangalet@gmail.com', github);
            expect(result.github).toBe(github);
        });
    });
    // get github
     describe('getGithub', () => {
        it('can get github username by calling getGithub', () =>
        {
            const github = 'cangalet';
            const result = new Engineer('Chris', 5, 'cangalet@gmail.com', github);
            expect(result.getGithub()).toEqual(github);
        });
    });
    // get role
    describe('getRole', () => {
        it('can get role by calling getRole', () =>
        {
            const role = ('Engineer');
            const result = new Engineer(role);
            expect(result.getRole()).toEqual(role);
        });
    });
})