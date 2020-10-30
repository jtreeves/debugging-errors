'use strict';

// What went wrong here?
// console.log('abc'.repeat(Infinity));  RangeError: Invalid count value

// console.log('abc'.repeat(1)); // 'abc'

/****************************************************************************
Make 3-5 different examples of range errors. 
Look at the console to see what line the error is on to know what to do when 
coming in contact with that error 

RESOURCE: CHECK YOUR README 📖
****************************************************************************/

// Error 1
// Invalid:
3.57.toFixed(-9);

// Problem:
// RangeError: toFixed() argument must be between 0 and 100; line 18 (range-error.js:18); type of "precision is out of range"

// Solution:
// Make the argument a positive integer

// Valid:
3.57.toFixed(9); // '3.570000000'

// Error 2
// Invalid:
(975).toString(-10);

// Problem:
// RangeError: toString() radix argument must be between 2 and 36; line 31 (range-error.js:31); type of "radix must be an integer"

// Solution:
// Make the argument a positive integer between 2 and 36

// Valid:
(975).toString(10); // '975'

// Error 3
// Invalid:
'I am a string'.repeat(-7);

// Problem:
// RangeError: String.prototype.repeat argument must be greater than or equal to 0 and not be Infinity; line 44 (range-error:js.44); type of "repeat count must be non-negative"

// Solution:
// Make the argument a positive integer

// Valid:
'I am a string'.repeat(7); // 'I am a stringI am a stringI am a stringI am a stringI am a stringI am a stringI am a string'