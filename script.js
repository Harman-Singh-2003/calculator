const topOutput = document.querySelector('#output-top');
const bottomOutput = document.querySelector('#output-bottom');

const numberButtons = document.querySelectorAll('.number-btn');
const operators = document.querySelectorAll('.operator');
const allButtons = document.querySelectorAll('.btn');
const clearButton = document.querySelector('.clear');
const backspaceButton = document.querySelector('.backspace');
const equalsButton = document.querySelector('.equals');

function Evaluate() {
    if (recentOperator == "x") {
        Multiply();
    }
    else if (recentOperator == "/") {
        Divide();
    }
    else if (recentOperator == "+") {
        Add();
    }
    else if (recentOperator == "-") {
        Subtract();
    }
}

function Add() {
    currentNum = parseFloat(currentNum) + parseFloat(prevNum);
}

function Subtract() {
    currentNum = parseFloat(prevNum) - parseFloat(currentNum);
}

function Multiply() {
    currentNum = parseFloat(prevNum) * parseFloat(currentNum);
    console.log("jere");
}

function Divide() {
    if (parseFloat(currentNum) == 0) {
        prevNum = "";
        currentNum = "";
        topOutput.textContent = "";
        bottomOutput.textContent = "Can't do that!";
    }
    else {
        currentNum = parseFloat(prevNum) / parseFloat(currentNum);
    }
}

prevNum = "";
currentNum = "";
evaluate = false;
recentOperator = "";

numberButtons.forEach((numberButton) => {

    numberButton.addEventListener('click', () => {
        if (currentNum.length < 15) {
            currentNum += numberButton.value;
        }
    });
});

operators.forEach((button) => {
    button.addEventListener('click', () => {
        if (((currentNum != "") || (currentNum == "0")) && ((prevNum != "") || (prevNum == "0"))) {
            Evaluate();
        }
        if ((currentNum != "") || (currentNum == "0")) {
            prevNum = currentNum;
            currentNum = "";
            topOutput.textContent = prevNum + " " + recentOperator;
        }
        recentOperator = button.id;
        topOutput.textContent = prevNum + " " + recentOperator;
    });
});

allButtons.forEach((button) => {
    button.addEventListener('click', () => {
        bottomOutput.textContent = currentNum;
    });
});

clearButton.addEventListener('click', () => {
    currentNum = "";
    prevNum = "";

    topOutput.textContent = "Cleared";
    bottomOutput.textContent = "";
});

backspaceButton.addEventListener('click', () => {
    if (currentNum != "") {
        currentNum = currentNum.slice(0, -1);
        bottomOutput.textContent = currentNum;
    }
});

equalsButton.addEventListener('click', () => {
    if (((currentNum != "") || (currentNum == "0")) && ((prevNum != "") || (prevNum == "0"))) {
        Evaluate();
        prevNum = currentNum;
        currentNum = "";
        topOutput.textContent = prevNum;
        bottomOutput.textContent = "";
    }
});