// there are three types of operators in JS

console.log(" ")
// 1. Arithmatic operator (+ , - , / , * , **)
// Can be used for arthmatic opreation
const currentYear = 2023;
const birthYear = 20002;

let currentAge = currentYear - birthYear;
console.log(age);

let college = "GHRCE";
let university = "RTMNU";
let city = "Nagpur"

console.log(university + " " + college + " " + city);

// 2. Assingment operator (=, += , -= , ++ , --)
let x = 25;
console.log(x);

x += 13;
console.log(x);

x -= 3;
console.log(x);

x *= 2;
console.log(x);

console.log(x++);
console.log(x--);


// 3. Comparison operator ( > , === , <= , >= , > )
console.log(currentAge > 25);
console.log(currentAge <= 18);
console.log(typeof true);

// 4. logical oprator ( || , &&)
console.log("Logical operators : " + true || false);
console.log("Logical operators : " + true && false);

// Assingment on basic operation
console.log(" ");

let population2 = 1342;
let eachHalfPopulation = population2 / 2;
console.log(eachHalfPopulation + " Millions");
console.log(++eachHalfPopulation);

const finlandPopulation = 6;
const myHalfPopulation = eachHalfPopulation;

console.log(myHalfPopulation > finlandPopulation);
console.log(myHalfPopulation > 33);

const description = "Portugal is in Europe, and its 11 million people speak portuguese";
console.log(description);

// Operator precedence in JS
// brackets > arithmatic operators > assingment operators....
// reffer MDN official page for more info ..