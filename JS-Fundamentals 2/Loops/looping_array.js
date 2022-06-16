console.log(`
>> Looping though array : `)

const google = [
    'software-company',
    'poular',
    1998,
    '400 Billion',
    'Unicorn',
    true
];

for (let i = 0; i < google.length; i++) {
    console.log(google[i],'->', typeof (google[i]));
}

const typeOfGoogle = [];
for (let i = 0; i < google.length; i++) {
    // typeOfGoogle[i] = typeof (google[i]);
    typeOfGoogle.push(typeof (google[i]));
}
console.log(typeOfGoogle);

// Array 2 : 
const birthYear = [2013, 2006, 1989, 1983,1956, 2002];
const ages = [];
const currentYear = 2022;

for (let i = 0; i < birthYear.length; i++) {
    ages.push(currentYear - birthYear[i]);
}

for (let i = 0; i < ages.length; i++) {
    console.log(ages[i]);
}

// continue and break statement : 
console.log(' --- ONLY STRINGS --- ');
for (let i = 0; i < google.length; i++) {
    if (typeof (google[i]) !== 'string') continue;
    console.log(google[i]);
}

// break when ther is number in between
console.log(' --- Break When NoT` STRInG --- ')
for (let i = 0; i < google.length; i++) {
    if (typeof (google[i]) === 'number') break;
    console.log(google[i]);
}