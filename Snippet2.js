// Reactive Paradigm
class Calculator{
    constructor(a, b){
        const obs = Rx.Observable.of(a,b);
        const sum$ = obs.reduce((ac, item) => (acc + item));

        return {
            observable: sum$
        }
    }
}

class Receipt{
    constructor(observable$){
        observable$.subscribe(value => console.log(`total receipt : £${value}`))
    }
}

const pizza = 6.0;
const beer = 5.00;

const calc = new Calculator(pizza);
const receipt = new Receipt(calc.observable);