console.log(`
>> Challenge 3 : `)

const mark = {
    fullname: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = (this.mass / (this.height ** 2)).toFixed(2);
        return this.bmi;
    }
};

const john = {
    fullname: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = (this.mass / (this.height ** 2)).toFixed(2);
        return this.bmi;
    } 
};

mark.calcBMI();
john.calcBMI();
if (mark.bmi < john.bmi) {
    console.log(`${john.fullname}'s BMI (${john.bmi}) is higher than ${mark.fullname}'s (${mark.bmi})`);
} else {
    console.log(`${john.fullname}'s BMI (${john.bmi}) is lower than ${mark.fullname}'s (${mark.bmi})`);
}