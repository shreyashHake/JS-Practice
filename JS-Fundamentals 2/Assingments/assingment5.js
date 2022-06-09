console.log(`
>> Assingment 5 : `)

function getPercentage(percentage) {
    return ((percentage / 7900) * 100).toFixed(2);
}
const populations = [1441, 1311, 750, 200];
console.log(populations.length == 4);

const percentages = [getPercentage(1441), getPercentage(1311), getPercentage(750), getPercentage(200)];
console.log(percentages);