

/*

Ledtrådar:
Skriv en querySelector som letar upp ett element med ID:t “message”, och spara i en variabel.
Skriv en querySelector som letar upp ett element med ID:t “changer”, och spara i en variabel.
Lägg till en “event listener” som lyssnar efter click-eventet på knappen.
Du använder metoden addEventListener() som finns på alla element-noder. Den tar emot två argument,
dels eventet (i det här fallet “click”), samt en funktion som skall köras när eventet sker:

changeBtn.addEventListener('click', function(event) {
  // Do something
})
I listener-funktionen, ändra textContent på “message”.


 */

const message = document.querySelector('#message');
const changer = document.querySelector('#changer');

changer.addEventListener('click', function(event) {
    message.textContent = "Please leave! 😡"
});