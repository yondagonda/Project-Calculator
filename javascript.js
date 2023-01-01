const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

function operate(operator, a, b) {
    if (operator === add) return add(a, b);  // do operator === + instead???? and same for the rest??
    else if (operator === subtract) return subtract(a, b);
    else if (operator === multiply) return multiply(a, b);
    else if (operator === divide) return divide(a, b);

}

console.log(operate(divide, 12, 3));