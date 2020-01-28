function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    function carDesc() {}
}

Car.prototype.carDesc = function() {
    const { make, model, year } = this;
    return `${year} ${make} ${model}`;
};

Car.prototype.carAge = function() {
    const { make, year } = this;
    const currYear = 2020;
    return `My ${make} is ${currYear - year} years old`;
};

const car1 = new Car('Honda', 'Fit', 2010);

console.log(car1);

console.log('Hello');

function Dog(breed, color, age) {
    this.breed = breed;
    this.color = color;
    this.age = age;
}
const Cody = new Dog('Aussie', 'grey', 10);

console.log(Cody.breed);
