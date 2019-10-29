/*

6. halflarge

Kopiera och skriv om din funktion från uppgift 2 så att den returnerar siffran om den resolvar.
Skapa en ny funktion, halveEvenNumber, som tar emot en siffra och returnerar ett promise.
Om siffran som tas emot är jämn skall promise:t resolve med halva den siffran,
annars rejecta med meddelandet "Not an even number”:

greaterThan10(12)
  .then(function(num) {
    return halveEvenNumber(num)
  })
  .then(function(halvedNum) {
    console.log(halvedNum) // 6
  })

greaterThan10(11)
  .then(function(num) {
    return halveEvenNumber(num)
  })
  .catch(function(error) {
    console.log(error) // Not an even number
  })

 */

function halveEvenNumber(num) {
    return new Promise((resolve, reject) => {
        if (isNaN(parseInt(num)) || (num%2 !== 0)){
            reject(`Not an even number`);
        } else {
            resolve(num/2);
        }
    })
}

function greaterThan10(num) {
    return new Promise((resolve, reject) => {
        if (isNaN(parseInt(num))){
            reject(`${num} is not a number`);
        } else if (parseInt(num) <= 10){
            reject(`${num} is not greater than 10`);
        } else {
            resolve(num);
        }
    })
}

greaterThan10(12)
    .then(function(num) {
        return halveEvenNumber(num);
    })
    .then(function(halvedNum) {
        console.log(halvedNum) // 6
    })
    .catch(function(error) {
        console.log(error)
    });

greaterThan10(11)
    .then(function(num) {
        return halveEvenNumber(num)
    })
    .catch(function(error) {
        console.log(error) // Not an even number
    });
