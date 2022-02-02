const Employee = require('../lib/Employee');

describe('Employee constructor', () => {
    it('assigns class attributes', () => {
        const Ayako = new Employee('Ayako', '1', 'ayako@gmail.com');
        expect(Ayako.name).toEqual('Ayako');
        expect(Ayako.id).toEqual('1');
        expect(Ayako.email).toEqual('ayako@gmail.com');
    })
    //     it('should throw errors if provided wrong arguments', () => {
    //         const person = new Employee('', '-1', 'ayako@gmail.com');
    //         expect(person.name).toThrow("Expected parameter 'name' to be a non-empty string");
    //         expect(person.id).toThrow("Expected parameter 'id' to be a non-negative number");
    //     })
});

describe('Employee methods', () => {
    it('returns the correct name', () => {
        const Ayako = new Employee('Ayako', '1', 'ayako@gmail.com');
        expect(Ayako.getName()).toEqual('Ayako');

    })

    it('returns the correct id', () => {
        const Ayako = new Employee('Ayako', '1', 'ayako@gmail.com');
        expect(Ayako.getId()).toEqual('1');

    })

    it('returns the correct email', () => {
        const Ayako = new Employee('Ayako', '1', 'ayako@gmail.com');
        expect(Ayako.getEmail()).toEqual('ayako@gmail.com');

    })

    it('returns the correct role', () => {
        const Ayako = new Employee('Ayako', '1', 'ayako@gmail.com');
        expect(Ayako.getRole()).toEqual('Employee');

    })


})