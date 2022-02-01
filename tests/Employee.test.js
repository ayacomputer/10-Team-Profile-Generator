const Employee = require('../lib/Employee');

describe('Employee class', () => {
    it('To check if the employee name is correct', () => {
        const Ayako = new Employee('Ayako', '1', 'ayako@gmail.com');
        expect(Ayako.name).toEqual('Ayako');
    })
    it('To check if the employee id is correct', () => {
        const Ayako = new Employee('Ayako', '1', 'ayako@gmail.com');
        expect(Ayako.id).toEqual('1');
    })
    it('To check if the employee email is correct', () => {
        const Ayako = new Employee('Ayako', '1', 'ayako@gmail.com');
        expect(Ayako.email).toEqual('ayako@gmail.com');
    })
});