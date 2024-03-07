const inputField = document.querySelector('input');

function display(value) {
    inputField.value += value;
}

function Clear() {
    inputField.value = '';
}

function del() {
    inputField.value = inputField.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = inputField.value;
        let result;
        if (expression.includes('%')) { //operator persen
            let operands = expression.split('%');
            let dividend = parseFloat(operands[0]);
            let percent = parseFloat(operands[1]);
            result = (dividend * percent) / 100; // untuk Menghitung persentase dari nilai
        } 
        else {
            result = eval(expression);
        }
        inputField.value = result;
    } catch (error) {
        inputField.value = 'error';
    }
}

