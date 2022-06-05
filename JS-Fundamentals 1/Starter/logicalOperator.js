console.log(`
>> Logical operator : `)

console.log(`And --> && , Or --> || , not --> !`)

let hasDrivingLicence = true;
let hasGoodVision = true;

console.log(hasDrivingLicence && hasGoodVision);
console.log(hasDrivingLicence || hasGoodVision);
console.log(hasDrivingLicence || !hasGoodVision);
console.log(hasDrivingLicence && !hasGoodVision);

let isTired = true;

if (hasDrivingLicence && hasGoodVision && !isTired) {
    console.log("You can dive the car !");
} else (
    console.log("Someone else should drive car !")
)