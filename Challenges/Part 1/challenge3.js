console.log(`
>> Challenge 3 : `)

let dolphinsScore1 = 96;
let dolphinsScore2 = 111;
let dolphinsScore3 = 101;

let dolphinsAvg = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;

let koalasScore1 = 109;
let koalasScore2 = 95;
let koalasScore3 = 123;

let koalasAvg = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

console.log(dolphinsAvg, koalasAvg);

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
    console.log("Team Dolphin is the winner !!");
} else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
    console.log("It's a tie !!");
} else {
    console.log("Team Koalas is the winner !!");
}