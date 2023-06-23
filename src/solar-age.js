export default class User {
    constructor(age, previousAge, futureAge) {
        this.age = age;
        this.mercuryAge = 0;
        this.venusAge = 0;
        this.marsAge = 0;
        this.jupiterAge = 0;
        this.previousAge = previousAge;
        this.futureAge = futureAge;
    }

    ageOnMercury() {
        this.mercuryAge = Math.floor(this.age / .24);
        return this.mercuryAge;
    }

    ageOnVenus() {
        this.venusAge = Math.floor(this.age / .62);
        return this.venusAge;
    }

    ageOnMars() {
        this.marsAge = Math.floor(this.age / 1.88);
        return this.marsAge;
    }

    ageOnJupiter() {
        this.jupiterAge = Math.floor(this.age / 11.86);
        return this.jupiterAge;
    }

    earthYearsPassed() {
        let earthYears = this.age - this.previousAge;
        return earthYears;
    }

    mercuryYearsPassed() {
        let mercuryYears = Math.round(100 * (this.earthYearsPassed() / .24)) / 100;
        return mercuryYears;
    }

    venusYearsPassed() {
        let venusYears = Math.round(100 * (this.earthYearsPassed() / .62)) / 100;
        return venusYears;
    }

    marsYearsPassed() {
        let marsYears = Math.round(100 * (this.earthYearsPassed() / 1.88)) / 100;
        return marsYears;
    }

    jupiterYearsPassed() {
        let jupiterYears = Math.round(100 * (this.earthYearsPassed() / 11.86)) / 100;
        return jupiterYears;
    }

    earthYearsUntil() {
        let earthYears = this.futureAge - this.age;
        return earthYears;
    }

    mercuryYearsUntil() {
        let mercuryYears = Math.round(100 * (this.earthYearsUntil() / .24)) / 100;
        return mercuryYears;
    }
}