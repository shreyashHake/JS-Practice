console.log('3. Arrow function : ')

// Single line arrow function : 
const calcAge3 = birthYear => 2022 - birthYear;
console.log(calcAge3(2002));

// Multi line arrow function : 
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirment = 65 - age;
    return `${firstName} retires in ${retirment} years.`;
}
console.log(yearsUntilRetirement(2002, 'Shreyash'));
console.log(yearsUntilRetirement(2000, 'Ashwini'));

// Example : 
const decider = value => Math.floor(Math.random()) * 10;
switch (decider()) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
        console.log("Value is less than 7");
        break;
    default:
        console.log("Value is greater than 7")
}