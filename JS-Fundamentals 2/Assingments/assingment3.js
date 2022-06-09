console.log(`
>> Assingment 3 : `)

const percentageOfWorld3 = (population) => {
    return (population / 7900) * 100;
}

const logger2 = (percentPopulation, country) => {
    console.log(`${country}'s population is ${percentPopulation.toFixed(2)}% of the world population.`)
}

const populationOfChinna3 = percentageOfWorld1(1441);
logger2(populationOfChinna3, 'Chinna');

const populationOfIndia3 = percentageOfWorld1(1320);
logger2(populationOfIndia3, 'India');

const populationOfUSA3 = percentageOfWorld1(750);
logger2(populationOfUSA3, 'USA');