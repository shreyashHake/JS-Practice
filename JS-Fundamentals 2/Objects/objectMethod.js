console.log(`
>> Object method : `)

const shreyash = {
    firstName: "Shreyash",
    lastName: "Hake",
    birthYear: 2002,
    friends: ['Rushabh', 'Tanmay', 'Mehul', 'Sharukh', 'Harshal'],
    college: 'GHRCE',
    job: 'Student',
    driversLicencd: false,

    // using function expression inside the object : 
    // method 1 : 
    // calcAge: function (birthYear) {
    //     return 2022 - birthYear;
    // }
    
    // Method 2 : 
    // calcAge: function () {
    //     return 2022 - this.birthYear;
    // }
    
    // Method 3 : 
    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return (`${this.firstName} is a ${this.calcAge()} years old ${this.job} and he has ${this.driversLicencd ? 'a' : 'no'} driving licence.`);
    }
};

// Method 1 :
// console.log(shreyash.calcAge(shreyash.birthYear)); // we can either use dot operator
// console.log(shreyash['calcAge'](shreyash.birthYear)); // we can also use bracket method

// Method 2 :
// console.log(shreyash.calcAge());
// console.log(shreyash['calcAge']());

// Method 3  : 
console.log(shreyash.calcAge())  // we only need to calculate age once then we can simply reuse them in furthre code .....
console.log(shreyash.age);
console.log(shreyash.getSummary());