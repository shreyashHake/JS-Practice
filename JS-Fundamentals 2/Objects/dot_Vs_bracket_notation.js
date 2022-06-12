console.log(`
>> Dot and bracket notation : `)

// dot notation
console.log('Dot notation : ')
console.log(movies.bollywood)
console.log(shreyashObject.friends);

// bracket notation
console.log('Baracket notation : ')
console.log(movies['bollywood']);
console.log(shreyashObject['age']);

// the use why we need bracket notation
// console.log("Output of promt : ")
// const userInput = prompt(`What kind of movie you want to watch ?

// Select from
// 1. hollywood
// 2. bollywood
// 3. tollywood
// `);

// if (movies[userInput]) {
//     console.log(`You have following options : ${movies[userInput]}`)
// } else {
//     console.log(`Your search is not available`)
// }

// how we can add more values is object
movies.marathi = ['TimePass', 'Fun&Food', 'Dund'];
console.log(movies);

// small challenge
console.log(`${shreyashObject['firstName']} has ${shreyashObject.friends.length} friends, and his best friend is ${shreyashObject['friends'][0]}.`)