class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age} years old`);
    }
}


class Car {
    constructor(brand, model, year, licensePlate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
    }

    assignOwner(owner) {
        if (owner.age >= 18) {
            this.owner = owner;
        } else {
            console.log("Owner must be at least 18 years old.");
        }
    }

    showInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, License Plate: ${this.licensePlate}`);
        if (this.owner) {
            console.log("Owner:");
            this.owner.showInfo();
        } else {
            console.log("Owner not specified.");
        }
    }
}

const person1 = new Human('Artem', '25');
const person2 = new Human('Sam', '28');
const person3 = new Human('Victoria', '18');

const auto1 = new Car('Toyota', 'Land Cruiser', '2023', 'AP0007PA');
const auto2 = new Car('Mersedes', 'S-Class', '2022', 'KA0001AK');
const auto3 = new Car('Audi', 'Q7', '2023', 'AA1111AA');

auto1.assignOwner(person1);
auto2.assignOwner(person3);
auto3.assignOwner(person2);

auto1.showInfo();
auto2.showInfo();
auto3.showInfo();