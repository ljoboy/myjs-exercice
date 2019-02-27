class Calculator {
    sum(a, b) {
        return a + b;
    }
}

class Receipt {
    constructor(calculator) {
        this.calc = calculator;
    }
    print(itemA, itemB) {
        const total = this.calc.sum(itemA, itemB);
        console.log(`total receipt £${total}`);
    }
}