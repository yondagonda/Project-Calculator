const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

function operate(operator, a, b) {
    if (operator === "add") return add(a, b);  // do operator === + instead???? and same for the rest??
    else if (operator === "subtract") return subtract(a, b);
    else if (operator === "multiply") return multiply(a, b);
    else if (operator === "divide") return divide(a, b);
}

const numbers = document.querySelectorAll("#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine");
const currentValue = document.getElementById("display")
let displayValue = +currentValue.innerHTML

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        currentValue.innerHTML += e.target.innerHTML; 
        let displayValue = +currentValue.innerHTML
        console.log(displayValue);
    })
});

const clears = document.querySelector("#clear")
const operators = document.querySelectorAll("#add, #subtract, #multiply, #divide")
const equals = document.querySelector("#equals")

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        let displayValue = currentValue.innerHTML
        a = +displayValue;
        currentValue.innerHTML = "";
        chosenOperation = e.target.id;
        console.log(chosenOperation);
    })
});

equals.addEventListener('click', () => {
    b = +currentValue.innerHTML;
    console.log(operate(chosenOperation, a, b));
    currentValue.innerHTML = operate(chosenOperation, a, b);
})

clears.addEventListener('click', () => {
    return currentValue.innerHTML = "";
});