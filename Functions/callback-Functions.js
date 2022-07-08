"use strict";
console.log(`
>> Callback - Functions : `);
// Call-back funtions helps us in creating 'Abstraction' i.e. user don't need to know working of all the functions....

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher order functios : bcz we don't case what 'fn' does, we just implement it.
// one of the great example is 'addEventListner' function....
const transform = function (str, fn) {
  console.log(`Original String : ${str}`);
  console.log(`After transform : ${fn(str)}`);
  console.log(`Transformed by : ${fn.name}`);
};

transform("JavaScript is beutiful!", oneWord);
transform("JavaScript is beutiful!", upperFirstWord);

// Js uses callback funtions all the time..
const higFi = function () {
  console.log("🖐");
};
document.body.addEventListener("click", higFi);
