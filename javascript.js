const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

function operate(operator, a, b) {
    if (operator === "add") return add(a, b);  
    else if (operator === "subtract") return subtract(a, b);
    else if (operator === "multiply") return multiply(a, b);
    else if (operator === "divide") return divide(a, b);
}

const numbers = document.querySelectorAll("#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine");
const currentValue = document.getElementById("display")

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        currentValue.innerHTML += e.target.innerHTML; 
        displayValue = +currentValue.innerHTML
        console.log(displayValue);
    })
});

const clears = document.querySelector("#clear")
const operators = document.querySelectorAll("#add, #subtract, #multiply, #divide")
const equals = document.querySelector("#equals")

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        a = displayValue;

        currentValue.innerHTML = "";
        chosenOperation = e.target.id;
        console.log(chosenOperation);
  
    })
});

equals.addEventListener('click', () => {
    b = displayValue

    console.log(operate(chosenOperation, a, b));
    currentValue.innerHTML = Math.round(operate(chosenOperation, a, b) * 10000) / 10000; // ensures answers get rounded to max 4dp

    if (b === 0 && chosenOperation === "divide") { // this conditional statement prevents division by 0
        currentValue.innerHTML = " ";
        return alert("nice try buddy");
    }
})

clears.addEventListener('click', () => currentValue.innerHTML = "");
