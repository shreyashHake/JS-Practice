console.log(`
>> Challenge 2 : `)

function calcTip1(bill) {
    return Number((50 <= bill && bill >= 300) ? 0.15 * bill : 0.2 * bill);
}

console.log(calcTip1(100));

const bills = [125, 555, 44];
const tips = [calcTip1(bills[0]), calcTip1(bills[1]), calcTip1(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills , tips, total);