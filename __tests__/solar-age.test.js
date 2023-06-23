import User from "../src/solar-age";

describe('AgeCalculator', () => {
    let user;

    beforeEach(() => {
        user = new User(33, 20);
    });

    test('should create a User object with a userAge property', () => {
        expect(user.age).toEqual(33);
    });

    test('should return users age on Mercury', () => {
        expect(user.ageOnMercury()).toEqual(137);
        expect(user.mercuryAge).toEqual(137);
    });

    test('should return users age on Venus', () => {
        expect(user.ageOnVenus()).toEqual(53);
        expect(user.venusAge).toEqual(53);
    });

    test('should return users age on Mars', () => {
        expect(user.ageOnMars()).toEqual(17);
        expect(user.marsAge).toEqual(17);
    });

    test('should return users age on Jupiter', () => {
        expect(user.ageOnJupiter()).toEqual(2);
        expect(user.jupiterAge).toEqual(2);
    });

    test('should return how many years have passed on Earth since a specified birthday', () => {
        expect(user.earthYearsPassed()).toEqual(13)
    });
});