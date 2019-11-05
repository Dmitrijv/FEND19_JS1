/*

    A collection of useful code snippets.

*/


// delete a key from a key:value object
const person = {age: 12, name: "John Doe", height: "126cm"}
delete person["height"]; //  person => {age: 12, name: "John Doe"}


// split a sting in to an array of characers
const str1 = "orange";
const chars = str1.split(""); // chars => ["o", "r", "a", "n", "g", "e"]


// reverse a string
const str2 = "plant";
const reverse = str.split("").reverse().join(""); // reverse => "tnalp"


// extracts a section of a string and return it as a new string, without modifying the original string
let str3 = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(31));     // expected output: "the lazy dog."
console.log(str.slice(4, 19));  // expected output: "quick brown fox"
console.log(str.slice(-4));     // expected output: "dog."
console.log(str.slice(-9, -5)); // expected output: "lazy"




