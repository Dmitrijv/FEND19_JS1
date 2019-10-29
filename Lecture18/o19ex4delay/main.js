/*

4. delay
Skapa en funktion, delay, som tar emot ett tal som argument och returnerar ett promise.
Ditt promise skall resolva efter så många millisekunder som argumentet som skickades in:

delay(1000).then(function() {
  console.log('We waited') // Körs efter 1000 millisekunder
})

 */

function delay(timeout) {
    return new Promise(resolve => { setTimeout(resolve, timeout); });
}

delay(1000).then(function() {
    console.log('We waited') // Körs efter 1000 millisekunder
});