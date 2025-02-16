// console.log('Hello World');
var slugify = require('slugify')

let a = slugify('some string') // some-string

console.log(a);

// if you prefer something other than '-' as separator
let b = slugify('some string', '_')  // some_string

// if you prefer something other than '-' as separator
let c = slugify('some string', '&')  // some_string

console.log(c);