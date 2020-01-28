// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     function carDesc() {}
// }

// Car.prototype.carDesc = function() {
//     const { make, model, year } = this;
//     return `${year} ${make} ${model}`;
// };

// Car.prototype.carAge = function() {
//     const { make,  year } = this;
//     const currYear = 2020;
//     return `My ${make} is ${currYear - year} years old`;
// };

// const car1 = new Car('Honda', 'Fit', 2010);

// console.log(car1);

// console.log('Hello');

// function Dog(breed, color, age) {
//     this.breed = breed;
//     this.color = color;
//     this.age = age;
// }
// const Cody = new Dog('Aussie', 'grey', 10);

// console.log(Cody.breed);

// class Car {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
//     carDesc() {
//         const { year, make, model } = this;
//         return `${year} ${make} ${model}`;
//     }
//     carAge() {
//         const { make, year } = this;
//         const currYear = 2020;
//         return `My ${this.carDesc()} is ${currYear - year} years old`;
//     }
// }

// const car1 = new Car('Honda', 'Fit', 2010);

class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.calcHSL();
    }
    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb() {
        return `rgb(${this.innerRGB()})`;
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()},${a})`;
    }
    hex() {
        const { r, g, b } = this;
        return (
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    }
    hsl() {
        const { h, s, l } = this;
        return `hsl(${h}, ${s}%, ${l}%)`;
    }
    fullSaturation() {
        const { h, l } = this;
        return `hsl(${h}, 100%, ${l}%)`;
    }
    opposite() {
        const { h, s, l } = this;

        const newHue = (h + 180) % 360;
        return `hsl(${newHue}, ${s}%, ${l}%)`;
    }
    calcHSL() {
        let { r, g, b } = this;
        // Make r, g, and b fractions of 1
        r /= 255;
        g /= 255;
        b /= 255;

        // Find greatest and smallest channel values
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
        if (delta == 0) h = 0;
        else if (cmax == r)
            // Red is max
            h = ((g - b) / delta) % 6;
        else if (cmax == g)
            // Green is max
            h = (b - r) / delta + 2;
        // Blue is max
        else h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        // Make negative hues positive behind 360°
        if (h < 0) h += 360;
        // Calculate lightness
        l = (cmax + cmin) / 2;

        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        // Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        this.h = h;
        this.s = s;
        this.l = l;
    }
}

const red = new Color(255, 67, 89, 'tomato');
