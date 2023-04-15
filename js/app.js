let firstNumber = prompt('Введите первое число');
let secondNumber = prompt('Введите второе число');
if (firstNumber === '' || secondNumber === '') {
    alert('Error')
} else {
    if (secondNumber == 0) {
        alert('Ошибка, второе число равно 0')
    } else {
        alert(`Результат деления ${firstNumber / secondNumber}`)
    }
    if (firstNumber < secondNumber) {
        confirm('Вы уверены что хотите продолжить операцию?')
    } else {
        alert(`Результат вычитания ${firstNumber - secondNumber}`)
    }
}


