console.log(`
>> Switch statement in JavaScript : `)

let day = "tuesday";

switch (day) {
    case "monday":
        console.log("It's monday !!")
        break;

    case "tuesday":
        console.log("It's tuesday !!")
        break;

    case "wednesday":
    case "thursday":
        console.log("It's wednesday and thursday !!")
        break;

    case "friday":
        console.log("It's friday !!")
        break;

    case "saturday":
        console.log("It's saturday !!")
        break;

    case "sunday":
        console.log("It's sunday !!")
        break;
    default:
        console.log("Invalid day !")
        break;
}

console.log(`
>> statement : something which implesment logic e.g. : if ,else if, else, switch and usde to assign valus : let name = "Ajay"

>> expression : produces value which has some data type e.g. 3 + 4, true && false ,  etc`)