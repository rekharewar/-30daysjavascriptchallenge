class Calculator {
    constructor(initialValue) {
        this.result = initialValue; 
    }
    add(value) {
        this.result += value;
        return this; 
    }

    subtract(value) {
        this.result -= value;
        return this;
    }
    multiply(value) {
        this.result *= value;
        return this;
    }
    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this;
    }

    power(value) {
        this.result = Math.pow(this.result, value);
        return this; 
    }
    getResult() {
        return this.result;
    }
}


const calc = new Calculator(10);
console.log(calc.add(5).subtract(7).getResult()); 
