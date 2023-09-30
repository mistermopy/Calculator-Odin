const body = document.querySelector('body'),
    container = document.querySelector('.container'),
    input = document.querySelector('input'),
    clearButton = document.querySelector('#clear'),
    numberButtons = document.querySelector('.numberButtons'),
    operatorButtons = document.querySelector('.operatorButtons');

const zeroBtn = document.querySelector('#zero'),
    oneBtn = document.querySelector('#one'),
    twoBtn = document.querySelector('#two'),
    threeBtn = document.querySelector('#three'),
    fourBtn = document.querySelector('#four'),
    fiveBtn = document.querySelector('#five'),
    sixBtn = document.querySelector('#six'),
    sevenBtn = document.querySelector('#seven'),
    eightBtn = document.querySelector('#eight'),
    nineBtn = document.querySelector('#nine'),
    addBtn = document.querySelector('#add'),
    subtractBtn = document.querySelector('#subtract'),
    multiplyBtn = document.querySelector('#multiply'),
    divideBtn = document.querySelector('#divide'),
    equalsBtn = document.querySelector('#equals');

clearButton.addEventListener('click', () => input.value = '');
zeroBtn.addEventListener('click', () => input.value += 0);
oneBtn.addEventListener('click', () => input.value += 1);
twoBtn.addEventListener('click', () => input.value += 2);
threeBtn.addEventListener('click', () => input.value += 3);
fourBtn.addEventListener('click', () => input.value += 4);
fiveBtn.addEventListener('click', () => input.value += 5);
sixBtn.addEventListener('click', () => input.value += 6);
sevenBtn.addEventListener('click', () => input.value += 7);
eightBtn.addEventListener('click', () => input.value += 8);
nineBtn.addEventListener('click', () => input.value += 9);

addBtn.addEventListener('click', () => {
    
});
subtractBtn.addEventListener('click', () => {

});
multiplyBtn.addEventListener('click', () => {

});
divideBtn.addEventListener('click', () => {

});

equalsBtn.addEventListener('click', () => {

});

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

/* NOTES FOR ASSISTANCE
const body = document.querySelector('body'), 
container = document.querySelector('.container'),
content = document.querySelector('#content'),
let finalResult = document.createElement('div');

body.style = 'height: 95vh; width: 95vw;';
container.style = 'height: 100%; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;';
btnCSS.style = 'display: flex; gap: 15%;';
content.style = 'margin-top: 5%; height: 80%; width: 80%; display: flex; flex-direction: column; justify-content: space-between;';

playerSelectionValue.textContent = '';
playerSelectionDisplay.appendChild(playerSelectionValue);
pScoreDisplay.textContent = `${pScoreActual}`;
container.replaceChildren(gameLose);

rock.addEventListener('click', ()=> {
    playRound('rock', computerPlay());
});
*/