// Imperative programming
class Calculator {
    constructor() {
        this.VAT = 22;
    }
    sum(...items) {
        let total = 0;
        let i = 0;
        for (i; i < items.length; i++) {
            total = total + items[i];
            total = total + items[i] * this.VAT / 100;
        }
        return total;
    }
}

class Receipt {
    constructor(calculator) {
        this.calc = calculator;
    }
    print(...items) {
        let total = this.calc.sum(...items);
        console.log(`total receipt £${total.toFixed(2)}`);
    }
}