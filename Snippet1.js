// Injection de dependance
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

const pizza = 15.00;
const beer = 7.00;
const receipt = new Receipt(new Calculator());
receipt.print(pizza, beer);