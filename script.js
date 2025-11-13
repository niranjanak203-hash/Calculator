function appendNumber(number) {
    document.getElementById('result').value += number;
}

function appendOperator(operator) {
    document.getElementById('result').value += operator;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function deleteLastChar() {
    const result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    const result = document.getElementById('result');
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}
