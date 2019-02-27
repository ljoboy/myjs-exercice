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