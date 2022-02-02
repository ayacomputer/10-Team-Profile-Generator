const Manager = require('../lib/Manager');

describe('Manager constructor', () => {
    it('assigns class attributes', () => {
        const Ayako = new Manager('Ayako', '1', 'ayako@gmail.com');
        expect(Ayako.name).toEqual('Ayako');
        expect(Ayako.id).toEqual('1');
        expect(Ayako.email).toEqual('ayako@gmail.com');
    })
});

describe('Manager methods', () => {
    it('returns the correct name', () => {
        const Ayako = new Manager('Ayako', '1', 'ayako@gmail.com');
        expect(Ayako.getName()).toEqual('Ayako');

    })

    it('returns the correct id', () => {
        const Ayako = new Manager('Ayako', '1', 'ayako@gmail.com');
        expect(Ayako.getId()).toEqual('1');

    })

    it('returns the correct email', () => {
        const Ayako = new Manager('Ayako', '1', 'ayako@gmail.com');
        expect(Ayako.getEmail()).toEqual('ayako@gmail.com');

    })

    it('returns the correct role', () => {
        const Ayako = new Manager('Ayako', '1', 'ayako@gmail.com');
        expect(Ayako.getRole()).toEqual('Manager');

    })


})