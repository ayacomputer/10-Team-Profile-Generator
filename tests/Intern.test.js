const Intern = require('../lib/Intern');

describe('Intern constructor', () => {
    it('assigns class attributes', () => {
        const Ayako = new Intern('Ayako', '1', 'ayako@gmail.com');
        expect(Ayako.name).toEqual('Ayako');
        expect(Ayako.id).toEqual('1');
        expect(Ayako.email).toEqual('ayako@gmail.com');

    });

    // it('returns error when the user inputs invalid value', () => {
    //     const person = new Intern(' ', '-1', 'ayako@gmail.com');
    //     expect(person.name).toEqual(`Expected parameter 'name' to be a non-empty string`);
    //     expect(person.id).toEqual(`Expected parameter 'id' to be a non-negative number`);
    //     expect(person.email).toEqual('ayako@gmail.com');
    // })
});

describe('Intern methods', () => {
    it('returns the correct name', () => {
        const Ayako = new Intern('Ayako', '1', 'ayako@gmail.com');
        expect(Ayako.getName()).toEqual('Ayako');

    })

    it('returns the correct id', () => {
        const Ayako = new Intern('Ayako', '1', 'ayako@gmail.com');
        expect(Ayako.getId()).toEqual('1');

    })

    it('returns the correct email', () => {
        const Ayako = new Intern('Ayako', '1', 'ayako@gmail.com');
        expect(Ayako.getEmail()).toEqual('ayako@gmail.com');

    })

    it('returns the correct school', () => {
        const Ayako = new Intern('Ayako', '1', 'ayako@gmail.com', 'Osaka University');
        expect(Ayako.getSchool()).toEqual('Osaka University');

    })

    it('returns the correct role', () => {
        const Ayako = new Intern('Ayako', '1', 'ayako@gmail.com');
        expect(Ayako.getRole()).toEqual('Intern');

    })


})