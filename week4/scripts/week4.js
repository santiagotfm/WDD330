import { Car } from './car.js';

let cars = [];

let car1 = new Car('Toyota', 'Tundra', '2007', 'Gold');
let car2 = new Car('Ford', 'F-150', '2021', '');

cars.push(car1);
cars.push(car2);

console.log(cars);

// let car = {
//     make: 'Toyota',
//     model: 'Tundra',
//     year: '2007',
//     color: 'Gold'
// };

// print(car);

// function print(car) {
//     console.log(car.make);
//     console.log(car.model);
//     console.log(car.year);
//     console.log(car.color);
// }

// // function print(make, model, year, color) {
// //     console.log(car.make);
// //     console.log(car.model);
// //     console.log(car.year);
// //     console.log(car.color);
// // }


