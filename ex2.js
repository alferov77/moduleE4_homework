function hasProperty(propName, obj) {
    return obj.hasOwnProperty(propName);
}

const person = {
    name: 'Alex',
    age: 30
};

// Проверка
console.log(hasProperty('name', person)); // true
console.log(hasProperty('address', person)); // false
