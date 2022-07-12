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
// partial application : 
const bookAA45 = book.bind(airAsia, 45);
bookAA45('Steven Shane');
bookAA45('Jony Rodes');
console.log(airAsia);

// * With Event listener
airAsia.planes = 300;
airAsia.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
}

// document.querySelector(".buy").addEventListener("click", airAsia.buyPlane);
 // the 'cl' at line 50 will give 'NaN' in this case because the this keyword will point to 'document.querySelector(".buy")' and so we need to pass and method which we pass using 'bind' method

 // using bind method 
document
  .querySelector(".buy")
  .addEventListener("click", airAsia.buyPlane.bind(airAsia));
// airAsia.buyPlane.bind(airAsia) --> passes a method as 'bind' returns a method..

console.log(`
>> Partial application : `);

// ** Partial application (preset parameters)
const addTax = (tax, value) => value + (value * tax) / 100;
console.log(addTax(10, 200));
console.log(addTax(12.5, 452));

// predefine tax 23
const addVAT = addTax.bind(null, 23);
console.log(addVAT(100));
console.log(addVAT(2312));

// funtion returning function
const addTaxRate = function (rate) {
  return function (value) {
    return value + (value * rate) / 100;
  }
}

const addVAT2 = addTaxRate(23);
console.log(addVAT2(100));
console.log(addVAT2(2312));