/*

9. Skapa en generell animeringsfunktion med setInterval
Extrauppgift!

Skapa en funktion, animate, som tar emot fyra argument:

function animate(from, to, duration, callback) {}

From är ett startvärde, och to är ett slutvärde. Duration är hur länge animeringen skall pågå.
Callback är en funktion som skall köras under animeringens gång.
Animate skall ha en setInterval som körs 60 gånger varje sekund.
I varje intervall skall ett värde räknas ut, som skall börja på startvärdet “from” på första intervallet,
och sluta på “to” i det sista intervallet.
I varje intervall skall callback-funktionen köras, och värdet skall skickas med.
Den skall kunna användas för att animera någonting, t.ex. Så här:

clickBtn.addEventListener('click', function() {
  animate(100, 200, 5000, function(value) {
    circle.style.width = value + 'px'
    circle.style.height = value + 'px'
  })
})

 */

let onAdventure = false;


function animate(from, to, duration, callback) {

    const fps = 60;
    const animationFrames = duration / (1000/fps);
    const fontChangePerFrame = (to - from) / animationFrames;
    let frames = 0;
    let currentPos = from;

    let intervalId = setInterval(drawNextFrame, 1000/fps);

    function drawNextFrame() {
        frames++;
        currentPos += fontChangePerFrame;

        callback(currentPos);

        if (frames >= animationFrames) {
            clearInterval(intervalId);
        }
    }



}


const image = document.querySelector("#harold");
const button = document.querySelector("#cheerup");

button.addEventListener('click', function() {
    if (onAdventure === true) return;
    animate(0, 400, 1000, function(value) {
        image.style.left = value + 'px';
    });
});
