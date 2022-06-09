console.log(`
>> Function declaration and expression : `)

console.log(`1. Function declaration : `)
function calcAge1(birthYear) {
    return 2022 - birthYear;
}

const age1 = calcAge1(2002);
console.log(age1);

console.log(`2. Function Expression : `)
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}

const age2 = calcAge2(2002);
console.log(age2);

//both at one place
console.log(age1, age2);