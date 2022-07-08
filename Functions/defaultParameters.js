'use strict';

const bookings = [];
console.log(`No default : `);
// 1. Without default parameters
const createBooking = function (name, numberOfPassengers, price) {
    const booking = {
        name,
        numberOfPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}
createBooking('LH123');
createBooking('LH123', 12, 456);

// 2. ES-5 way of setting default prameter
console.log(`
ES-5 Default parameter : `);
const createBooking2 = function (name, numberOfPassengers, price) {

    numberOfPassengers = numberOfPassengers || 1;
    price = price || 185;

    const booking = {
        name,
        numberOfPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}
createBooking2('LH123');
createBooking2('LH123', 12, 456);

console.log(`
Modern JS method : `);
const createBooking3 = function (name, numberOfPassengers = 1, price = 589 /*We can give an expression AWA any value*/) {

  const booking = {
    name,
    numberOfPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking3("LH123");
createBooking3("LH123", 12, 456);