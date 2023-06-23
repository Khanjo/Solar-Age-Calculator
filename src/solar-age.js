export default class User {
    constructor(age) {
        this.age = age;
        this.mercuryAge = 0;
        this.venusAge = 0;
    }

    ageOnMercury() {
        this.mercuryAge = this.age / .24;
        return this.mercuryAge;
    }

    ageOnVenus() {

    }
}