class Human {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    residents = [];

    addResidents(human) {
        this.residents.push(human);
    }
}

let ap = new Apartment();

class House {
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
        } else {
            console.log("Cannot add more apartments. Maximum capacity reached.");
        }
    }
}

const person1 = new Human('petya', 'male');
const person2 = new Human('lusya', 'female');
const person3 = new Human('vasya', 'male');

const apartment1 = ap;
const apartment2 = ap;
const apartment3 = ap;

apartment1.addResidents(person1);
apartment2.addResidents(person2, person2);
apartment3.addResidents(person3);

const house = new House(3);
house.addApartment(apartment1);
house.addApartment(apartment2);
house.addApartment(apartment3);

console.log(house);