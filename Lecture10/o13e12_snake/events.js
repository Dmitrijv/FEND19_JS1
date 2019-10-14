/*

Skapa ett antal element, som t.ex. div, som uppdaterar sin position när muspekaren flyttar sig runt dokumentet.


 */

const TAIL_LENGTH = 100;

for (let i = 1; i < TAIL_LENGTH; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle", "hidden");
    circle.setAttribute("id", "circle"+i);
    document.querySelector("body").appendChild(circle);
}


let isDrawing = false;
let circleToMove = 1;

document.addEventListener("mousedown", function(event) {
    isDrawing = true;
});

document.addEventListener("mouseup", function(event) {
    isDrawing = false;
});


document.addEventListener("mousemove", function(event) {

    if (!isDrawing)
        return;

    if (circleToMove === TAIL_LENGTH)
        circleToMove = 1;
    else
        circleToMove++;

    const circle = document.querySelector("#circle"+circleToMove);
    circle.classList.remove("hidden");
    circle.style.left = event.clientX + 'px';
    circle.style.top = event.clientY + 'px';


});

