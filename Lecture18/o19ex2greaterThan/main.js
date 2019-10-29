/*

2. greaterThan10
Skapa en funktion, greaterThan10, som tar emot ett tal som argument, och returnerar ett Promise.
Om talet som skickas in är större än 10 skall ditt promise resolva, annars rejecta:

greaterThan10(12).then(function() {
  console.log('Success!')
})

greaterThan10(5).catch(function() {
  console.log('Fail!')
})

*/


function greaterThan10(num) {

    return new Promise((resolve, reject) => {

        if (isNaN(parseInt(num))){
            reject(`${num} is not a number`);
        } else if (parseInt(num) <= 10){
            reject(`${num} is not greater than 10`);
        } else {
            resolve(`${num} is greater than 10`);
        }

    })
}

greaterThan10(33)
    .then(msg => {
        console.log(msg);
    })
    .catch((error) => {
        console.log(error);
    });