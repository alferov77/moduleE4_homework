// Основной класс для всех электроприборов
class Appliance {
    constructor(name) {
        this.name = name;
        this.isPluggedIn = false;
    }

    // Методы для включения/выключения прибора
    plugIn() {
        this.isPluggedIn = true;
        console.log(`${this.name} is now plugged in.`);
    }

    unplug() {
        this.isPluggedIn = false;
        console.log(`${this.name} is now unplugged.`);
    }
}

// Класс для настольной лампы
class TableLamp extends Appliance {
    constructor(name, color, power) {
        super(name);
        this.color = color;
        this.power = power;
    }

    // Метод для показа потребляемой мощности
    displayPower() {
        if (this.isPluggedIn) {
            console.log(`The ${this.name} consumes ${this.power} watts.`);
        } else {
            console.log(`The ${this.name} is not plugged in and consumes no power.`);
        }
    }
}

// Класс для компьютера
class Computer extends Appliance {
    constructor(name, type, power) {
        super(name);
        this.type = type;
        this.power = power;
    }

    // Метод для показа потребляемой мощности
    displayPower() {
        if (this.isPluggedIn) {
            console.log(`The ${this.name} consumes ${this.power} watts.`);
        } else {
            console.log(`The ${this.name} is not plugged in and consumes no power.`);
        }
    }
}

// Создание объектов классов настольной лампы и компьютера
const deskLamp = new TableLamp("Desk Lamp", "white", 40);
const officeComputer = new Computer("Office Computer", "desktop", 500);

// Проверка функциональности объектов
deskLamp.plugIn();
deskLamp.displayPower();
officeComputer.plugIn();
officeComputer.displayPower();