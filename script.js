let displayValue = '0';
let firstNumber = null;
let operator = null;

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function appendCharacter(char) {
    if (char === '.' && displayValue.includes('.')) {
        return; 
    }

    if (displayValue === '0' && char !== '.') {
        displayValue = char;
    } else {
        displayValue += char;
    }

    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    firstNumber = null;
    operator = null;
    updateDisplay();
}

function calculate() {
    if (operator && firstNumber !== null) {
        const secondNumber = parseFloat(displayValue);
        switch (operator) {
            case '+':
                displayValue = (firstNumber + secondNumber).toString();
                break;
            case '-':
                displayValue = (firstNumber - secondNumber).toString();
                break;
            case '*':
                displayValue = (firstNumber * secondNumber).toString();
                break;
            case '/':
                if (secondNumber === 0) {
                    alert("Error: Cannot divide by zero!");
                    clearDisplay();
                    return;
                }
                displayValue = (firstNumber / secondNumber).toString();
                break;
            default:
                break;
        }

        if (displayValue.includes('.') && displayValue.split('.')[1].length > 5) {
            displayValue = parseFloat(displayValue).toFixed(5);
        }

        firstNumber = null;
        operator = null;
        updateDisplay();  
        displayValue = '0';  
    }
}