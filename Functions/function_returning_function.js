"use stict";

console.log(`
>> Function returning another function : `);

console.log("Method 1 : ");
// Using function declaration :
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
};

const greeter = greet("Hey");
greeter("Shreyash");
greeter("Ajay");
greet("Hello")("Sumit");

console.log("Method 2 :");
// Using arrow function :
const greet2 = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}!`);
  };
};

greet2("Namaste")("Mandali");
