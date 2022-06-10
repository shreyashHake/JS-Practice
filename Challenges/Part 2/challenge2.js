console.log(`
>> Challenge 2 : `)

function calcTip1(bill) {
    let tip;
    if (50 <= bill && bill >= 300) {
        tip = 1500 / bill;
    } else {
        tip = 2000 / bill;
    }
    return tip;
}

console.log(calcTip1(100));