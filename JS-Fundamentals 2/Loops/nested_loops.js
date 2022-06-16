console.log(`
>> Nested loops : `)

// looping backwards : 
const ram = [
    'Ram',
    'Charan',
    'Actor',
    1992,
    true,
    '100 M'
]

for (let i = ram.length - 1; i >= 0; i--) {
    console.log(i, ram[i]);
}

// nested loops : 
for (let exersice = 1; exersice < 4; exersice++) {
    console.log(`-------- Starting exersice ${exersice} --------`);
    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exersice ${exersice} : Repetetion ${rep} 🤸‍♀️`)
    }
}