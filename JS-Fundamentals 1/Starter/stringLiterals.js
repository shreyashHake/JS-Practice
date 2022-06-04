// we use ` ` to create string literals instest of concatination ...
console.log("\n\About String : ")

// Using concatination : 

let name = "shreyash";
let year = 2023;
let birthYear2 = 2002;
let profession = "Student";

let shreyash = "I'm " + name + " a " + (year - birthYear2) + " year old " + profession + " !";
console.log(shreyash);

// Using sting literals

let shreyashNew = `I'm ${name} a ${year - birthYear2} year old ${profession} !`;
console.log(shreyashNew)