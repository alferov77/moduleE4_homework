function createAdder(firstNumber) {
    return function(secondNumber) {
        return firstNumber + secondNumber;
    };
}

const addNumber = createAdder(5);
console.log(addNumber(3));
