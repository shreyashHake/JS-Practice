console.log(`
>> Even Or Odd : `)

function even_odd(num) {
    if (num % 2 === 0) return `${num} is even`;
    else return `${num} is odd`;
}

console.log(even_odd(15));
console.log(even_odd(167));
console.log(even_odd(20));