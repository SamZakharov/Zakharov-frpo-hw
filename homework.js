
class Hamburger {
    static SIZE_SMALL = {
        price: 50,
        calories: 20,
    };

    static SIZA_BIG = {
        price: 100,
        calories: 40,
    };

    static STUFFING_CHEESE = {
        price: 10,
        calories: 20,
    };

    static STUFFING_SALAD = {
        price: 20,
        calories: 5,
    };

    static STUFFING_POTATO = {
        price: 15,
        calories: 10,
    };

    static TOPPING_SPICE = {
        price: 15,
        calories: 0,
    };

    static TOPPING_MAYO = {
        price: 20,
        calories: 5,
    };

    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    };

    addTopping(topping) {
        this.toppings.push(topping);
    };

    calculatePrice() {
        let overallPrice = this.size.price + this.stuffing.price;
        if (this.toppings.length > 0) {
            this.toppings.forEach((topping) => {
                overallPrice += topping.price;
            })
        }
        return overallPrice;
    }

    calculateCalories() {
        let overallCalories = this.size.calories + this.stuffing.calories;
        if (this.toppings.length > 0) {
            this.toppings.forEach((topping) => {
                overallCalories += topping.calories;
            })
        }
        return overallCalories;
    }
}

// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log(`Calories:  + ${hamburger.calculateCalories()}`);

// скільки коштує
console.log(`Price:  + ${hamburger.calculatePrice()}`);

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// А скільки тепер коштує?
console.log(`Price with sauce:  + ${hamburger.calculatePrice()}`);