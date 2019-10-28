/*

Kopiera dina filer och kod från uppgift 2.
Flytta animeringskoden inuti din event-listener till en egen funktion som du kallar för “blowUp()”
Den skall ta emot ett argument, en callback-funktion.
Callback-funktionen skall köras direkt när 💥-emojin visas.
Kör blowUp()-funktionen på pil upp-klick.
I callback-funktionen skall du skapa ett nytt P-element, ge den textinnehållet “BLAM!”,
och lägga till den överst i bodyn:

 */

const balloon = document.querySelector("#balloon");

const fps = 60;
const animationDuration = 2000;
const animationFrames = animationDuration / (1000/fps);
const startSize = 0;
const endSize = 512;
const fontChangePerFrame = (endSize - startSize) / animationFrames;
let frames = 0;
let currentFontSize = startSize;
function blowUp(callback) {
    frames++;
    currentFontSize += fontChangePerFrame;
    balloon.style.fontSize = currentFontSize + 'px';
    if (frames >= animationFrames) {
        clearInterval(intervalId);
        balloon.textContent = '💥';
        callback();
    }
}


function blam() {
    //console.log("blam was called");
    const body = document.querySelector("body");
    const paragraph = document.createElement("p").textContent = "BLAM!";
    body.prepend(paragraph);
}



let intervalId;
document.addEventListener('keyup', function(event) {
    intervalId = setInterval(function () {
        blowUp(blam)
    }, 1000/fps);
});







