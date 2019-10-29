/*

7. sortingCap

Extrauppgift!

Skriv om din funktion från uppgift 3 så att den tar emot en array med strängar istället för en enskild sträng.

Om något item i arrayen inte är en sträng, skall ditt promise rejecta.

Skapa en ny funktion som också returnerar ett promise, som sorterar ord i en array i alfabetisk ordning.


Kedja ihop dessa två funktioner.

 */

const words = ['hello', 'are', 'you', 'ok?'];

function makeUpperCase(strArray) {

    return new Promise((resolve, reject) => {

        const invalidItem = strArray.find(item => {return typeof item !== 'string'});
        if (invalidItem){
            reject(`${strArray} contains a non string value`);
        } else {
            resolve(strArray.map(word => {return word.toUpperCase()} ));
        }

    })
}


function sortWords(array){
    return new Promise(resolve => { resolve(array.sort()) } );
}

makeUpperCase(words)
    .then(function(uppercaseWords) {
        return sortWords(uppercaseWords)
    })
    .then(function(sortedWords) {
        console.log(sortedWords) // [ 'ARE', 'HELLO', 'OK?', 'YOU' ]
    });