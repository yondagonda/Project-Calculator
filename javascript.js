const add = (num1, num2) => (num1 + num2);
const subtract = (num1, num2) => (num1 - num2);
const multiply = (num1, num2) => (num1 * num2);
const divide = (num1, num2) => (num1 / num2);

function operate(operator, num1, num2) {
    if (operator === "add") return add(num1, num2);  
    else if (operator === "subtract") return subtract(num1, num2);
    else if (operator === "multiply") return multiply(num1, num2);
    else if (operator === "divide") return divide(num1, num2);
}

const numbers = document.querySelectorAll("#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine");
const currentValue = document.getElementById("display")
const sequence = [];

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        currentValue.innerHTML += e.target.innerHTML; 
        displayValue = +currentValue.innerHTML
        console.log(displayValue);
    })
});

const clears = document.querySelector("#clear");
const dp = document.querySelector("#point");
const plusMinus = document.querySelector("#plusMinus");
const operators = document.querySelectorAll("#add, #subtract, #multiply, #divide");
const equals = document.querySelector("#equals");
let count = 0;

operators.forEach(operator => { 
    operator.addEventListener('click', (e) => { 
        count += 1;
        if (count === 1) {
            num1 = displayValue;
            sequence.push(+currentValue.innerHTML)
            currentValue.innerHTML = "";
            chosenOperation = e.target.id;
            sequence.push(chosenOperation)
            console.log(sequence)
        }
        else if (count >= 2) { // bug exists where number is not being pushed correctly after clicking an operator, e.g. 
            //32 x 5 =, x 6 =, x 6 = works, however 32 x 5 =, x 6 x 6 doesnt work
            if (typeof ans === 'undefined') {
                sequence.push(+currentValue.innerHTML)
                currentValue.innerHTML = "";
                chosenOperation = e.target.id;
                sequence.push(chosenOperation)
                console.log(sequence)  
            }
            else if (typeof ans !== 'undefined') {
                num1 = ans;
                currentValue.innerHTML = "";
                chosenOperation = e.target.id;
                sequence.push(chosenOperation)
                console.log(sequence)  
            }
        }    
    })
});
equals.addEventListener('click', () => {
    num2 = displayValue
    sequence.push(+currentValue.innerHTML);
    console.log(sequence)

    function iterate() {
        console.log(sequence.length)
        let num1 = sequence[0]
        let num2 = sequence[2]
        let chosenOperation = sequence[1]

        ans = operate(chosenOperation, num1, num2); 
        chainedAns = operate(sequence[3], ans, sequence[4])
        chainedAns2 = operate(sequence[5], chainedAns, sequence[6])

        if (sequence.length === 3) {
            ans = operate(chosenOperation, num1, num2);  
            console.log(ans)
            return ans;   
        } 
        else if (sequence.length === 5) {
            chainedAns = operate(sequence[3], ans, sequence[4])
            console.log(chainedAns);
            return chainedAns
        }
        else if (sequence.length === 7) {
            chainedAns2 = operate(sequence[5], chainedAns, sequence[6])
            console.log(chainedAns2);
            return chainedAns2
        }
        else if (sequence.length === 9) {
            chainedAns3 = operate(sequence[7], chainedAns2, sequence[8])
            console.log(chainedAns3);
            return chainedAns3
        }
    };

    if (num2 === 0 && chosenOperation === "divide") { 
        currentValue.innerHTML = " ";
        return alert("nice try buddy");
    }
    currentValue.innerHTML = Math.round(iterate() * 10000) / 10000;
})

dp.addEventListener('click', () => { 
    if ((currentValue.innerHTML).indexOf(".") === -1) {
        return (currentValue.innerHTML = currentValue.innerHTML + ".")
    }
    else alert("cant put more than one decimal place here!")
})

plusMinus.addEventListener('click', () => {
    return (currentValue.innerHTML = (currentValue.innerHTML) * -1);
})

clears.addEventListener('click', () => {
    location.reload()
});