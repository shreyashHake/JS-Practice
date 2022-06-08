console.log(`
>> Function calling another function : `)

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