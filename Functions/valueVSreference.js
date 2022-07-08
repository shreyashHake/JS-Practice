'use strict';

// JS is only Pass by 'Value' no Pass by 'reference';

console.log(`
>> Pass by Value and Pass by reference :
`);

const flightNum = 'LH146';
const shreyash = {
    name: 'Shreyash Hake',
    passport: 2548795634
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LMX45';
    passenger.name = "Mr. " + passenger.name;

    if (passenger.passport === 2548795634) {
        //alert('Checked In Succesfully !')
    } else {
        //alert('Wrong Passport');
    }
}
checkIn(flightNum, shreyash);
console.log(flightNum, ' ', shreyash); // flightNum doesnot change here...

// Changing passport
const newPassport = function(passenger) {
    passenger.passport = Math.trunc(Math.random() * 1000000000);
}
newPassport(shreyash);
checkIn(flightNum, shreyash);
