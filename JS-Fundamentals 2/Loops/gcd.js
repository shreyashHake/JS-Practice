console.log(`
>> GCD of two numbers :`)

function gcd(a, b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

console.log(gcd(25, 30));
console.log(gcd(1789466, 12134892));