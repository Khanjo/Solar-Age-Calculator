export default class User {
    constructor(age, previousAge) {
        this.age = age;
        this.mercuryAge = 0;
        this.venusAge = 0;
        this.marsAge = 0;
        this.jupiterAge = 0;
        this.previousAge = previousAge;
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
        let earthYears;
        earthYears = this.age - this.previousAge;
        return earthYears;
    }

    mercuryYearsPassed() {

    }
}