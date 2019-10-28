/*

Skriv ett Javascript-program som lyssnar efter att användaren klickar på pil upp-tangenten.
När användaren gjort detta skall du starta en animation som ökar storleken på ballongen tills
font-storleken är 512 eller mer, då skall du stanna animationen och ersätta ballongen med: 💥

 */

const balloon = document.querySelector("#balloon");

const fps = 60;
const animationDuration = 2000;
const animationFrames = animationDuration / (1000/fps);

const startSize = 0;
const endSize = 216;
const fontChangePerFrame = (endSize - startSize) / animationFrames;

let frames = 0;
let currentFontSize = startSize;

function animateBalloon() {
    frames++;
    currentFontSize += fontChangePerFrame;
    balloon.style.fontSize = currentFontSize + 'px';
    //console.log(currentHeight);
    if (frames >= animationFrames) {
        clearInterval(intervalId);
        balloon.textContent = '💥';
    }
}





let intervalId;
document.addEventListener('keyup', function(event) {
    intervalId = setInterval(animateBalloon, 1000/fps);
});

