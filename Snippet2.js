class Calculator{
    constructor(a, b){
        const obs = Rx.Observable.of(a,b);
        const sum$ = obs.reduce((ac, item) => (acc + item));

        return {
            observable: sum$
        }
    }
}