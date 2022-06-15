console.log(`
>> Object method : `)

const shreyash = {
    firstName: "Shreyash",
    lastName: "Hake",
    birthYear: 2002,
    friends: ['Rushabh', 'Tanmay', 'Mehul', 'Sharukh', 'Harshal'],
    college: 'GHRCE',

    // using function expression inside the object : 
    // method 1 : 
    // calcAge: function (birthYear) {
    //     return 2022 - birthYear;
    // }
    
    // Method 2 : 
    // calcAge: function () {
    //     return 2022 - this.birthYear;
    // }
    

};

// Method 1 :
// console.log(shreyash.calcAge(shreyash.birthYear)); // we can either use dot operator
// console.log(shreyash['calcAge'](shreyash.birthYear)); // we can also use bracket method

// Method 2 :
// console.log(shreyash.calcAge());
// console.log(shreyash['calcAge']());
