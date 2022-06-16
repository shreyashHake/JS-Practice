console.log(`
>> challenge 4 : `)

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips2 = [];
const totals2 = [];

function calcTip1(bill) {
    return Number((50 <= bill && bill >= 300) ? 0.15 * bill : 0.2 * bill);
}

for (let i = 0; i < bills2.length; i++) {
    tips2.push(calcTip1(bills2[i]));
    totals2.push(tips2[i] + bills2[i]);
}
console.log(bills2, tips2, totals2);

function calcAverage2(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

console.log(`
Average of [${bills2}] is ${calcAverage2(bills2)}`);

console.log(`Average of [${tips2}] is ${calcAverage2(tips2)}`);

console.log(`Average of [${totals2}] is ${calcAverage2(totals2)}`);