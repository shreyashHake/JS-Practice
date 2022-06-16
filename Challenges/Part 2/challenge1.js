console.log(">> Challenge 1 : ")

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolhins, avgKoalas) {
    if (avgDolhins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolhins}, ${avgKoalas}) 🏆`);
    } else if (avgKoalas >= 2 * avgDolhins) {
        console.log(`Koalas win (${avgKoalas}, ${avgDolhins}) 🏆`);
    } else {
        console.log(`No team win (${avgKoalas}, ${avgDolhins}) 😮`)
    }
}

// Input 1 : 
let avgDolhins = calcAverage2(44, 23, 71);
let avgKoalas = calcAverage2(65, 54, 49);

checkWinner(avgDolhins, avgKoalas);

// Input 2 ; 
avgDolhins = calcAverage2(85, 54, 41);
avgKoalas = calcAverage2(23, 34, 27);

checkWinner(avgDolhins, avgKoalas);