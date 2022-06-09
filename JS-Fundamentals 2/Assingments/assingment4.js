console.log(`
>> Assingment 4 : `)

function percentageOfWorld4(population) {
    return (population / 7900) * 100;
}

function describePopulation(population, country) {
    const percentage = percentageOfWorld4(population);
    console.log(`${country}'s population is ${percentage.toFixed(2)}% of the world population.`)
}

describePopulation(1300, 'India');
describePopulation(1414, 'Chinna');
describePopulation(750, 'USA');