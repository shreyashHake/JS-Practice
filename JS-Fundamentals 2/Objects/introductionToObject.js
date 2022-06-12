console.log(`
>> Objects in javaScript : `)

// objects are like arrays in java but object have value for each element
// order is not maintained in object ....
const buddy = ['Rushabh', 'Tanmay', 'Mehul', 'Sharukh', 'Harshal'];

// Eg 1 : 

const movies = {
    bollywood: ['Don', 'PK', 'Dhoom'],
    hollywood: ['DonJon', 'SK', 'Zoom'],
    tollywood: ['KgF', 'RRR']
};

console.log(movies.bollywood)
console.log(movies.hollywood)
console.log(movies.tollywood)

// Eg 2 : 

const shreyashObject = {
    firstName: "Shreyash",
    lastName: "Hake",
    age: 2022 - 2002,
    friends: ['Rushabh', 'Tanmay', 'Mehul', 'Sharukh', 'Harshal'],
    college: 'GHRCE'
};

console.log(shreyashObject);
console.log(shreyashObject.age);
console.log(shreyashObject.firstName);
console.log(shreyashObject.lastName);
console.log(`I am ${shreyashObject.firstName} ${shreyashObject.lastName}, from ${shreyashObject.college}.`)