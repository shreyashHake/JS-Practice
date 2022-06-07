'use strict'
console.log(`
>> Functions in JavaScript : `);

function logger(name, age) {
    console.log(`  * My name is ${name}, I'm ${age} year olds.`)
}

logger('Shreyash', 20);
logger('Tanmay', 20);
logger('Rushabh', 20);

function fruiteJuiceMaker(apple, orange) {
    const juice = `Juice created with ${apple} apples and ${orange} oranges.`
    return juice;
}

const appleJuice = fruiteJuiceMaker(5, 0);
console.log(appleJuice);

console.log(fruiteJuiceMaker(0, 5));