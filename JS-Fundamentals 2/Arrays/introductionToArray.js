console.log(`
>> Introduction to Arrays : `)

// without array : 
const friend1 = "Gaurav";
const friend2 = "Rajesh";
const friend3 = "Samir";

// with array :
// 1. Array of Strings only .... 
const friends = ["Gaurav", "Rajesh","Rajiv", "Vishy", "Radja", "VD"];
console.log(friends);

// 2. Array of string, integer, and array...
let firstName = 'Shreyash';
let lastName = "Hake";

const me = [firstName, lastName, 2022 - 2002, friends];
console.log(me);

// length of array is given by : 
console.log(`Length of array 'friends' is ${friends.length}`)

// Accesing array elements : 
console.log(friends[0], friends[1], friends[friends.length - 1]);