console.log(`
>> Function calling another function : `)
console.log("Example 1 : ")

function cutInPieces(fruit) {
    return fruit * 4;
}

function juiceMaker(apples, orange) {
    const applesPieces = cutInPieces(apples);
    const orangePieces = cutInPieces(orange);

    const juice = `Made juice with ${applesPieces} pieces🍷 and ${orangePieces} pieces🍹`

    return juice;
}

const juice = juiceMaker(2, 3);
console.log(juice);

console.log("Example 2 : ")

function calcAge(birthYear) {
    return 2022 - birthYear;
}

function yearsUntilRetirement2(firstName, birthYear) {
    const age = calcAge(birthYear);
    const yearRemained = 65 - age;

    if (yearRemained > 0) {
        console.log(`${firstName} will retire in ${yearRemained} years.`)
        return yearRemained;
    } else {
        console.log(`${firstName} has already retired 🤗🎂`)
        return -1;
    }
}

console.log(yearsUntilRetirement2('Shreyash', 2002));
console.log(yearsUntilRetirement2('Anuj', 1950));