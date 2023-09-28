let aInt;
let bInt;
let operator;

function add(aInt, bInt) {
    return aInt + bInt; 
}

function subtract(aInt, bInt) {
    return aInt - bInt;
}

function multiply(aInt, bInt) {
    return aInt * bInt;
}

function divide(aInt, bInt) {
    return aInt / bInt;
}

function operate(operator, aInt, bInt) {
    if (operator == '+') {
        return add(aInt, bInt);
    } if (operator == '-') {
        return subtract(aInt, bInt);
    } if (operator == '*') {
        return multiply(aInt, bInt);
    } if (operator == '/') {
        return divide(aInt, bInt);
    }
}

console.log(operate('*', 10, 2));