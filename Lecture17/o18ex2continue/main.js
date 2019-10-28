/*

2. Fortsätt tills du får nog
Du har följande HTML

<button id="stop">That's enough!</button>
<p id="msg"></p>

En gång varje sekund skall innehållet i elementet med ID “msg” öka med ett “Hey!”
Dvs efter 2 sekunder skall det se ut så här: “Hey!Hey!”
Efter 5 sekunder: “Hey!Hey!Hey!Hey!Hey!”, etc
När man klickar på knappen med ID “stop”, så skall det inte längre skrivas ut “Hey!”,
och en gång skall ett “Ok…” läggas till.

Så om man klickar på knappen efter tre sekunder skall det se ut så här: “Hey!Hey!Hey!Ok…”

 */

const message = document.querySelector("#msg");
const button = document.querySelector("#stop");

button.addEventListener("click", stop);

function stop(e) {
    clearInterval(intervalID);
    message.textContent = message.textContent + 'Ok…';
}


const intervalID = setInterval(function() {
    message.textContent = message.textContent + 'Hey!';
}, 1000);



