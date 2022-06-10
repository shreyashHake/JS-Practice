console.log(`
>> Some methods used with array : `)

// Adding an element : 
const friend = ['Rushabh', 'Tanmay', 'Mehul', 'Sharukh'];

friend.push('Ajay'); // Adds element to last.
friend.unshift('Suyog'); // Adds element to first.
console.log(friend);

// Removing an element : 
friend.pop('Ajay');  // remove element from last
friend.shift('Suyog');  // remove element from first
console.log(friend);

// check wheather element is present in the array or not
console.log(friend.indexOf('Rushabh'));
console.log(friend.includes('Rushabh'));
