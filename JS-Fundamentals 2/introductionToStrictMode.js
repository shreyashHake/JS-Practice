// We have to add below line in every .js files to enable 'strict mode' and it should be at the top all code.
// i.e. no code can be present above it, we can add comments though....

'use strict';
console.log(`
>> Strict mode `);
let hasDrivingLicense = false;
let testPased = true;

// if (testPased) hasDrivinLicense = true;
if (testPased) hasDrivingLicense = true;

if (hasDrivingLicense) {
    console.log(`I can ride car now 🚗`);
}