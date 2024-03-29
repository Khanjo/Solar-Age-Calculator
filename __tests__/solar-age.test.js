import User from "../src/solar-age";

describe('AgeCalculator', () => {
    let user;
    let earthYears;

    beforeEach(() => {
        user = new User(33, 20, 45);
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
        expect(user.earthYearsPassed()).toEqual(13);
    });

    test('should return how many years have passed on Mercury since a specified birthday', () => {
        expect(user.mercuryYearsPassed()).toEqual(54.17);
    });

    test('should return how many years have passed on Venus since a specified birthday', () => {
        expect(user.venusYearsPassed()).toEqual(20.97);
    });

    test('should return how many years have passed on Mars since a specified birthday', () => {
        expect(user.marsYearsPassed()).toEqual(6.91);
    });

    test('should return how many years have passed on Jupiter since a specified birthday', () => {
        expect(user.jupiterYearsPassed()).toEqual(1.1);
    });

    test('should return how many years will pass on Earth until a specified birthday', () => {
        expect(user.earthYearsUntil()).toEqual(12);
    });

    test('should return how many years will pass on Mercury until a specified birthday', () => {
        expect(user.mercuryYearsUntil()).toEqual(50);
    });

    test('should return how many years will pass on Venus until a specified birthday', () => {
        expect(user.venusYearsUntil()).toEqual(19.35);
    });

    test('should return how many years will pass on Mars until a specified birthday', () => {
        expect(user.marsYearsUntil()).toEqual(6.38);
    });

    test('should return how many years will pass on Jupiter until a specified birthday', () => {
        expect(user.jupiterYearsUntil()).toEqual(1.01);
    });
});