// Определение родительской функции Appliance
function Appliance(name) {
    this.name = name;
    this.isPluggedIn = false;
}

// Методы для включения и выключения прибора из розетки
Appliance.prototype.plugIn = function() {
    this.isPluggedIn = true;
    console.log(`${this.name} is now plugged in.`);
};

Appliance.prototype.unplug = function() {
    this.isPluggedIn = false;
    console.log(`${this.name} is now unplugged.`);
};

// Функция-конструктор для настольной лампы
function TableLamp(name, color, power) {
    Appliance.call(this, name);
    this.color = color;
    this.power = power; // мощность в ваттах
}

// Наследование от Appliance
TableLamp.prototype = Object.create(Appliance.prototype);
TableLamp.prototype.constructor = TableLamp;

// Добавление метода для вывода мощности
TableLamp.prototype.displayPower = function() {
    if (this.isPluggedIn) {
        console.log(`The ${this.name} consumes ${this.power} watts.`);
    } else {
        console.log(`The ${this.name} is not plugged in and consumes no power.`);
    }
};

// Функция-конструктор для компьютера
function Computer(name, type, power) {
    Appliance.call(this, name);
    this.type = type;
    this.power = power; // мощность в ваттах
}

// Наследование от Appliance
Computer.prototype = Object.create(Appliance.prototype);
Computer.prototype.constructor = Computer;

// Добавление метода для вывода мощности
Computer.prototype.displayPower = function() {
    if (this.isPluggedIn) {
        console.log(`The ${this.name} consumes ${this.power} watts.`);
    } else {
        console.log(`The ${this.name} is not plugged in and consumes no power.`);
    }
};

// Создание экземпляров настольной лампы и компьютера
const deskLamp = new TableLamp("Desk Lamp", "white", 40);
const officeComputer = new Computer("Office Computer", "desktop", 500);

// Тестирование функциональности
deskLamp.plugIn();
deskLamp.displayPower();
officeComputer.plugIn();
officeComputer.displayPower();
