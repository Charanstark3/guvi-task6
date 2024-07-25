//Person Class

class Person {
    constructor(name, age, gender, address, phoneNumber) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
        console.log(`Address: ${this.address}`);
        console.log(`Phone Number: ${this.phoneNumber}`);
    }
}

const person1 = new Person("Mugilan", 25, "Male", "101 Main St", "8652214022");
person1.displayDetails();

//Uber Price Calculation Class

class Uber {
    constructor(baseFare, costPerMinute, costPerMile, bookingFee) {
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
        this.bookingFee = bookingFee;
    }

    calculatePrice(minutes, miles) {
        return this.baseFare + (this.costPerMinute * minutes) + (this.costPerMile * miles) + this.bookingFee;
    }
}

const uber1 = new Uber(2.50, 0.35, 1.75, 1.00);
const tripPrice = uber1.calculatePrice(30, 10);
console.log(`Total Uber Price: $${tripPrice.toFixed(2)}`);
