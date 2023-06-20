const querystring = require('querystring');
let normal_string = "hello query string";
let encoded_strings ="hello%20string";

let encoded_string = querystring.escape(normal_string)
let decoded_string = querystring.unescape(encoded_strings)

console.log("Original String:",normal_string);
console.log("Encoded String:", encoded_string);
console.log("Decoded String:", decoded_string);