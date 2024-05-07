// Variables for calculator operation
let firstNumber = '';
let operator = '';
let secondNumber = '';
let result = '';

// Display element
const display = document.querySelector('.display');

// Function to clear calculator
function clearCalculator() {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    result = '';
    display.textContent = '0';
}

// Function to update displayy
function updateDisplay() {
    display.textContent = result;
}

// Function to perform basic math operations
function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                return 'Error: Division by zero';
            } else {
                return a / b;
            }
        default:
            return 'Error: Invalid operator';
    }
}

// Event listener for number buttons
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        if (result === 'Error') return;
        if (operator === '') {
            firstNumber += button.textContent;
            result = firstNumber;
        } else {
            secondNumber += button.textContent;
            result = secondNumber;
        }
        updateDisplay();
    });
});

// Event listener for operator buttons
document.querySelectorAll(''.operator).forEach(button => {
    button.addEventListener('click', () => {
        if (result === 'Error') return;
        if (firstNumber === '') return;
        if (secondNumber !== '') {
            result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
            firstNumber = result;
            secondNumber = '';
        }
        operator = button.textContent;
        updateDisplay();
    });
});

// Event listener for equals button
document.getElementById('equals').addEventListener('click', () => {
    if (result === 'Error') return;
    if (firstNumber === '' || operator === '' || secondNumber === '') return;
    result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    updateDisplay();
});

// Event listener for clear button
document.getElementById('clear').addEventListener('click', () => {
    if (result === 'Error') return;
    if (operator === '') {
        if (!firstNumber.includes('.')) {
            firstNumber += '.';
            result = firstNumber;
            updateDisplay();
        }
    } else {
        if (!secondNumber.includes('.')) {
            secondNumber += '.';
            result = secondNumber;
            updateDisplay();
        }
    }
});