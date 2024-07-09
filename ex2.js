function isPrime(num) {
    if (typeof num !== 'number' || num < 0 || num > 1000) {
        console.log('Данные неверны');
        return;
    }

    if (num === 0 || num === 1) {
        console.log(`${num} не является простым числом`);
        return;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(`${num} не является простым числом`);
            return;
        }
    }

    console.log(`${num} является простым числом`);
}

// Примеры вызовов функции
isPrime(0);   // 0 не является простым числом
isPrime(1);   // 1 не является простым числом
isPrime(2);   // 2 является простым числом
isPrime(29);  // 29 является простым числом
isPrime(1001); // Данные неверны
