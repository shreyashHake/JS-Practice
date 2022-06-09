console.log(`
>> Assingment 2 : `)

// Part 1
console.log("Part 1 : ")
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

function logger(percentPopulation, country) {
    console.log(`${country}'s population is ${percentPopulation.toFixed(2)}% of the world population.`)
}

const populationOfChinna = percentageOfWorld1(1441);
logger(populationOfChinna, 'Chinna');

const populationOfIndia = percentageOfWorld1(1320);
logger(populationOfIndia, 'India');

const populationOfUSA = percentageOfWorld1(750);
logger(populationOfUSA, 'USA');

// Part 2 
console.log("Part 2 : ")
const percentageOfWorld2 = function (population) {
    return ((population / 7900) * 100).toFixed(2);
}

const populationOfChinna2 = percentageOfWorld1(1441);
logger(populationOfChinna2, 'Chinna');

const populationOfIndia2 = percentageOfWorld1(1320);
logger(populationOfIndia2, 'India');

const populationOfUSA2 = percentageOfWorld1(750);
logger(populationOfUSA2, 'USA');

