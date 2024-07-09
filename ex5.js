const power = (x, n) => {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
};

// Тестирование функции
console.log(power(2, 3));  // 8
console.log(power(5, 2));  // 25
console.log(power(3, 4));  // 81
console.log(power(7, 0));  // 1

