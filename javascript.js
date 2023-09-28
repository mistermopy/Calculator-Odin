const body = document.querySelector('body'),
    container = document.querySelector('.container'),
    input = document.querySelector('input'),
    clearButton = document.querySelector('#clear'),
    numberButtons = document.querySelector('.numberButtons'),
    operatorButtons = document.querySelector('.operatorButtons');

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