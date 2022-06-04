console.log(`
>> Type conversion : `)
// Implicitely changing the value of one type to another ...

console.log(`Example 1 : 
`)
let facebook = "5000";
console.log(typeof facebook)
console.log(typeof Number(facebook)); // converting String to a number ...
console.log(typeof facebook)

console.log(Number(facebook) - 1000);


console.log(`
Example 2 : 
`);
let england = 2019
console.log(typeof england)
console.log(typeof String(facebook)); // converting Number to string ....
console.log(typeof england)

console.log("England won world cup in " + String(england))

console.log(`
>> Type coersion : `)
// Explecitely changing value fromm one data type to another ....

console.log('10' + '2' + 12);
console.log('10' - '2' - 12);
console.log('10' * 2 - '15')
console.log('100' / 2 - '15')

console.log(`
+ --> when '+' is used and one of th operator/variable is string(of numbers only) then two operators get concatined ...

- , * , / --> when one of this symbols is used, and if one of the operator/variable is string(of numbers only) the mathematical operations takes place ....`)