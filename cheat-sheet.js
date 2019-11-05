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


// sort an array of number strings in descendiong order
const digits = ["1", "32", "6", "21", "11"];
digits = digits.sort(function (a, b) { return Number(b) - Number(a) }).join(""); // digits => [32, 21, 11, 6, 1]


// use memoization to avoid repeating the same calculation in a recursinve function
function fibonacci(num, memo) {
    memo = memo || {};
    if (memo[num]) return memo[num];
    if (num <= 1) return memo[num] = 1;
    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}


// check if two primitives are the same
const valuesAreEqual = Object.is(val1, val2);