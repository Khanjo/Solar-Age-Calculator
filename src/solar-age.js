export default class User {
    constructor(age) {
        this.age = age;
        this.mercuryAge = 0;
        this.venusAge = 0;
        this.marsAge = 0;
    }

    ageOnMercury() {
        this.mercuryAge = Math.round(100 * (this.age / .24)) / 100;
        return this.mercuryAge;
    }

    ageOnVenus() {
        this.venusAge = Math.round(100 * (this.age / .62)) / 100;
        return this.venusAge;
    }

    ageOnMars() {
        this.marsAge = Math.round(100 * (this.age / 1.88)) / 100;
        return this.marsAge;
    }
}