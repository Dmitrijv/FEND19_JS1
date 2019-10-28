/*

8. Jumpman
Extrauppgift!

Utgå från filerna som finns här (kopiera dem till din dator):

https://github.com/JonasStattin/fend19-javascript1/tree/master/exercises/17time/09jumpman

När du klickar på pil upp-tangenten skall figuren “hoppa”, genom att först flytta sig uppåt på skärmen,
för att sedan vända nedåt och “landa” igen.
Du kan använda setInterval för att animera.
Du behöver antagligen hålla reda på riktningen (först uppåt, sedan nedåt)
Du ska inte kunna starta flera hopp förrän ett hopp är färdigt
(du kan använda en boolean för att inte starta fler hopp förrän ditt hopp är klart)

 */

const image = document.querySelector("#jumpman");

let isJumping = false;


const fps = 60;
const animationDuration = 1000;
const animationFrames = animationDuration / (1000/fps);

const startSize = 20;
const endSize = 240;
const fontChangePerFrame = (endSize - startSize) / animationFrames;

let frames = 0;
let currentHeight = startSize;

function jumpUp() {
    frames++;
    currentHeight += fontChangePerFrame;
    image.style.bottom = currentHeight + 'px';
    //console.log(currentHeight);
    if (frames >= animationFrames) {
        clearInterval(intervalId);
        frames = 0;
        intervalId = setInterval(jumpDown, 1000/fps);
    }
}

function jumpDown() {
    frames++;
    currentHeight -= fontChangePerFrame;
    image.style.bottom = currentHeight + 'px';
    if (frames >= animationFrames) {
        clearInterval(intervalId);
        isJumping = false;
        frames = 0;
    }
}



let intervalId;
document.addEventListener('keyup', function(event) {
    if (isJumping === true || event.key !== "ArrowUp") return;
    isJumping = true;
    intervalId = setInterval(jumpUp, 1000/fps);
});

