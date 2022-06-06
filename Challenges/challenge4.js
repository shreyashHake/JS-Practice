console.log(`
>> Challenge 4 : `);

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? 15 * bill / 100 : 20 * bill / 100;

const total = bill + tip;
console.log(`“The bill was ${bill}, the tip was ${tip} , and the total value ${total}`);