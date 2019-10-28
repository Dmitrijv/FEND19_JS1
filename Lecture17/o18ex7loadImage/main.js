/*

Du skall skriva en funktion, loadImage, som tar emot en sträng med en url och en callback-funktion.
I funktionen skall du sätta en eventlistener på image-elementet med ID “harold”, och lyssna efter “load”-eventet.
När “load” är färdigt skall callback-funktionen köras.
Ändra image-elementets src till den inskickade strängen.

Sätt en eventlistener på knappen med ID “cheerup”, och lyssna efter “click”-eventet.
I din eventlistener skall du köra funktionen loadImage(), och skicka in "harold2.jpg" som url,
samt en callback-funktion.
I callback-funktionen skall du ta bort knappen ur DOM-trädet, samt skapa en ny H1 med innehållet "All cheered up!",
och lägga till det i bodyn.

 */

const image = document.querySelector("#harold");
const button = document.querySelector("#cheerup");

button.addEventListener("click", function () {
    loadImage("harold2.jpg", cheerUp);
});

function loadImage(url, callback) {
    image.addEventListener("load", callback);
    image.setAttribute("src", url);
}

function cheerUp() {
    button.setAttribute("display", "none");
    const body = document.querySelector("body");
    const h1 = document.createElement("h1").textContent = "All cheered up!";
    body.append(h1);
    body.removeChild(button);
}



