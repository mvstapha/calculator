const display = document.querySelector(".display")
const numbers = Array.from(document.querySelectorAll(".number"))
const operators = Array.from(document.querySelectorAll(".operator"))
const clear = document.querySelector(".clear")
const equal = document.querySelector(".equal")

/* START OF TAKING NUMBERS AND OPERATOR */

let firstOperand = ""
numbers.forEach(number => {
    number.onclick = function() {
        if (isSecondOperand === false){
            firstOperand += number.textContent
            display.innerHTML = firstOperand;
        }else{
            secondOperand += number.textContent
            display.innerHTML += number.textContent;
        }
    }
});

let CurrentOperator = ""

operators.forEach(operator => {
    operator.onclick = function(){
        CurrentOperator = operator.textContent
        display.innerHTML += operator.textContent
        isSecondOperand = true;
    }
})


let secondOperand = ""
let isSecondOperand = false;

/* END OF TAKING NUMBERS AND OPERATOR */

/* START OF CALCULATING NUMBERS */

equal.onclick = function() {
    // Ensure both operands and an operator are present
    if (firstOperand !== "" && secondOperand !== "" && CurrentOperator !== "") {
        let result;
        // Perform the calculation based on the operator
        if (CurrentOperator === "+") {
            result = add(parseFloat(firstOperand), parseFloat(secondOperand)); // Convert to numbers
        } else if (CurrentOperator === "-") {
            result = substract(parseFloat(firstOperand), parseFloat(secondOperand));
        } else if (CurrentOperator === "*") {
            result = multiply(parseFloat(firstOperand), parseFloat(secondOperand));
        } else if (CurrentOperator === "/") {
            result = divide(parseFloat(firstOperand), parseFloat(secondOperand));
        }
        
        display.innerHTML = result; // Show the result on the screen
        // Reset the operands for the next calculation
        firstOperand = result.toString();
        secondOperand = "";
        CurrentOperator = "";
        isSecondOperand = false;
    }
};

/* END OF CALCULATING NUMBERS */

/* CLICK CLEAR */
clear.onclick = function(){
    firstOperand = ""
    secondOperand = ""
    CurrentOperator = ""
    isSecondOperand = false
    display.innerHTML = "0"
}
/*CLick Clear*/


function add(x,y){
    return x+y;
}
function substract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    if (y===0){
        return "Division Impossible by 0";
    }
    return x/y;
}

/*
function operate(operator,x,y){
    if (operator==="+"){
        return add(x,y)
    }
    else if (operator==="-"){
        return substract(x,y)
    }
    else if (operator==="*"){
        return multiply(x,y)
    }
    else if (operator==="/"){
        return divide(x,y)
    }
}
*/