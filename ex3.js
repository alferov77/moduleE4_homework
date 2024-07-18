function createEmptyObject() {
    return Object.create(null);
}

const myObject = createEmptyObject();
console.log(myObject); // {}

// Проверка
console.log(Object.getPrototypeOf(myObject) === null); // true
