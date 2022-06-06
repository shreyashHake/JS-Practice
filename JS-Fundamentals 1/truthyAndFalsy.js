// the five falsy values are : 0 , '', undefined, null, NaN 
console.log(`
>> Truthy And Falsy values : `);
console.log("Ther are 5 differnt falsy value other than 'false' in Js and they are 0, '', undefined, null and Nan ...");

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(12));
console.log(Boolean('non empty string'));

let height;
if (height) {
    console.log("Hehe !, height is defined ...")
} else {
    console.log("Height is not defined ...")
}

height = 0
if (height) {
    console.log("Hehe !, height is defined ..")
} else {
    console.log("Height is not defined ...")
}


height = 10
if (height) {
    console.log("Hehe !, height is defined ..")
} else {
    console.log("Height is not defined ...")
}