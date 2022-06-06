console.log(`
>> Ternary operator : `)

age = 15
// Using ternary operators : 
age >= 18 ? console.log(`I can have a 🚗`) : console.log(`I can have a 🚲`);

// Using if else statements : 
if (age >= 18) {
    console.log(`I can have a 🚗`);
} else {
    console.log(`I can have a 🚲`);
}

let drink = age >= 18 ? "Wine 🍷" : "Juice 🍹";
console.log(`I can have ${drink}`);

console.log(`I can have ${age >= 18 ? "Wine 🍷" : "Juice 🍹"}`);