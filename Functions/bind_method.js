'use stict';

console.log(`
>> Using Bind method on function`);

const airAsia = {
  airLine: "Air Asia",
  iataCode: "IND",
  bookings: [],
  // booking a flight
  book(flightNum,  ) {
    console.log(
      `${passenger} booked a flight on${this.iataCode}${flightNum} of  ${this.airLine} `
    );

    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name: `${passenger}`,
    });
  },
};

const airIndia = {
  airLine: "Air India",
  iataCode: "Aind",
  bookings: [],
};

// The bind method not only pass the arguments but also return a function.
const bookAA = book.bind(airAsia);
bookAA(89, 'John Smith');
bookAA(69, 'Steven Josh');
console.log(airAsia);

const bookAI = book.bind(airIndia);
bookAI(48, 'Manmohan Guru');
bookAI(448, 'Ajay Kadam');
console.log(airIndia);

// if we want that percular argument should be default then we can set that also

const bookAA45 = book.bind(airAsia, 45);
bookAA45('Steven Shane');
bookAA45('Jony Rodes');
console.log(airAsia);