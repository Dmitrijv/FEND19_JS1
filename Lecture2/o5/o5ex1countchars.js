

console.log(countChars("My Bad My Man", "M"));

function countChars(inputString, character) {

    return inputString.split(character).length - 1;

}