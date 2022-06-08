// Challenge 1

console.log(`>> Challenge 1 : `)
let marksMass, johnsMass, marksHeight, johnsHeight;

// test data 1 :
marksMass = 78;
marksHeight = 1.69;

let BMI_Mark = marksMass / (marksHeight ** 2);

johnsMass = 92;
johnsHeight = 1.88;

let BMI_John = johnsMass / (johnsHeight ** 2);

let markHigherBMI = BMI_Mark > BMI_John;

console.log(BMI_Mark, BMI_John, markHigherBMI);

// test data 2 :

marksMass = 95;
marksHeight = 1.88;

BMI_Mark = marksMass / (marksHeight ** 2);

johnsMass = 85;
johnsHeight = 1.76;

BMI_John = johnsMass / (johnsHeight ** 2);

markHigherBMI = BMI_Mark > BMI_John;

console.log(BMI_Mark, BMI_John, markHigherBMI);

// template literals 