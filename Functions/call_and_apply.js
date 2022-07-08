'use strict';
console.log(`
>> Call , apply and bind methods : `);
const indigo = {
    name: 'Indigo',
    iataCode: 'IND',
    bookings: [],
    // booking a flight
    book(flightNum, name) {
        console.log(`${name} booked a flight on ${this.iataCode}${flightNum}`);

        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name: this.name });
    }
}

indigo.book(125, 'Shreyash');
indigo.book(125, 'RamDas');
console.log(indigo);

const blueOrigin = {
    name: 'Blue Origin',
    iataCode: 'BlOr',
    bookings: []
}
const book = indigo.book;

// Do not works
// book(489, 'Keshaw');


console.log(`
>> After using Call method : `);

// So we use call, apply and bind method (here blueOrigin is the object that 'this' will point.....)
book.call(blueOrigin, 48, 'Jadhav Kedar');
console.log(blueOrigin);

book.call(indigo, 1546, 'Ravi S');
console.log(indigo);