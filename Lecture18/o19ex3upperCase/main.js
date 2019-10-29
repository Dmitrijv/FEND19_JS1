/*

3. makeUpperCase

Skapa en funktion, makeUpperCase(), som tar emot en sträng och returnerar ett promise.
    Om det som skickas in är en sträng, så skall ditt promise resolva, och skicka tillbaka strängen som uppercase.
    Om det som skickas in inte är en sträng, så skall ditt promise rejecta med ett meddelande: “Not a string”:

makeUpperCase('jonas').then(function(result) {
    console.log(result) // JONAS
})

makeUpperCase(5).catch(function(error) {
    console.log(error) // Not a string
})

 */

function makeUpperCase(str) {

    return new Promise((resolve, reject) => {

        if (str.toUpperCase){
            resolve(str.toUpperCase());
        } else {
            reject(`could not convert ${str} to upper case`);
        }

    })
}

makeUpperCase(33)
    .then(msg => {
        console.log(msg);
    })
    .catch((error) => {
        console.log(error);
    });