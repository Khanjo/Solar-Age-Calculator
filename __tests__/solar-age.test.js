import User from "../src/solar-age";

describe('AgeCalculator', () => {
    let user;

    beforeEach(() => {
        user = new User(33);
    });

    test('should create a User object with a userAge property', () => {
        expect(user.age).toEqual(33);
    });

    test('should return users age on mercury', () => {
        expect(user.ageOnMercury()).toEqual(137.5);
        expect(user.mercuryAge).toEqual(137.5);
    });
});