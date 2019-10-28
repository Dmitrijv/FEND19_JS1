/*

3. Callback efter timeout
Skriv en funktion, delay, som tar emot en funktion och ett numeriskt värde.
Din funktion skall vänta lika många sekunder som det inskickade värdet, och sedan köra den inskickade funktionen.

 */

function delay(funct, delay){
    setTimeout(funct, delay*1000);
}


delay(function() {
    console.log('Log!')
}, 1);

