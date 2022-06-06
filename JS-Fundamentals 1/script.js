// let js = "amazing";
// if (js === "amazing") alert("Here we go !");

console.log(">> Using console to print the values : ")
console.log(50 + 32 + 42 * 2);


let age = 20;
console.log(age);

// prefer camelCase for naming convention in JS
console.log(`
>> Diving into the variables : `)
let firstName = "Shreyash";
console.log(firstName);

let secondName = "Shreyash";
console.log(secondName);

let currentState = "Student";
let finalState = "Developer";

console.log(currentState);
console.log(finalState);

// Assingment on variables 
console.log(`
>> Assingment on variables : `)
let country = "India";
let continent = "Asia";
let population = 130

console.log(country + " is in " + continent + " and has the population of " + population)

console.log(`${country} is in ${continent} and has the population of ${population} !`)

console.log(`
>> if / else statements :: ...`)

if (population > 33) {
    console.log(`India's population is above average'`)
} else {
    console.log(`India's population is below average'`)
}

// Data types in JavaScript
console.log(`
>> Checking the datatype : `);
let price = 200
let item = "watch"
let available = true
let seller
let buyer = null

console.log(typeof price);
console.log(typeof item);
console.log(typeof available);
console.log(typeof seller);
console.log(typeof buyer);
console.log("yes this is a bug ... that typeof 'null' is Object");

console.log(`
>> Assingment Data type`);
let isIsland = true;
let language;

console.log(typeof isIsland);
console.log(typeof language);

// let , const and var
console.log(`
>> let , const and var : `);;
console.log("variables assingend with 'let' can be resassinged");
console.log("variables assinged with 'var' can also be reassinged but it is a old way");
console.log("variables assinged with 'const' can not be reassinged");

// Assingment on let, const and var
const primaryLanguage = "Marathi";
let secondaryLanguage = "Hindi";
console.log(" ");
console.log(primaryLanguage);
console.log(secondaryLanguage);

secondaryLanguage = "English";
console.log(secondaryLanguage);