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
let avgDolhins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

checkWinner(avgDolhins, avgKoalas);

// Input 2 ; 
avgDolhins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);

checkWinner(avgDolhins, avgKoalas);