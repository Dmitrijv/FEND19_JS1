/*

1. Respons med delay
Du har följande HTML:
<p id="sleepyhead">😴</p>
<button id="wakeup">Wake up</button>

När man klickar på knappen med ID “wakeup” skall det vara en fördröjning på 2 sekunder,
sen skall texten i elementet med ID “sleepyhead” ändras till: “😩 Why did you wake me up?”

 */

const emote = document.querySelector("#sleepyhead");
const button = document.addEventListener("click", changeEmote);

function changeEmote(event) {
    setTimeout(function() {
        emote.innerHTML = '😩 Why did you wake me up?'
    }, 2000);
}
