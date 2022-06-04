// Challenge 1

let marksMass, johnsMass, marksHeight, johnsHeight;

// test data 1 :
marksMass = 78;
marksHeight = 1.69;

let bmiMark = marksMass / (marksHeight ** 2);

johnsMass = 92;
johnsHeight = 1.88;

let bmiJohn = johnsMass / (johnsHeight ** 2);

let markHigherBMI = bmiMark > bmiJohn;

console.log(markHigherBMI);