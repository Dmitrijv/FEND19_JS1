/*

Skapa ett HTML-element med följande innehåll: 👌
Om användaren trycker ned musen (mousedown) på elementet skall elementet följa efter muspekaren
(mousemove) fram till att användaren släpper musklicket (mouseup).

Tips:
Ge elementet en stor fontSize så att ikonen blir stor.
Elementet kommer behöva ha position: absolute.

Det finns en cursor-property som gör att du kan byta vilken muspekarikon som används ovanför elementet, använd “pointer”.
Lyssna efter mousedown på elementet, men lyssna efter mousemove och mouseup på document.
Använd en variabel (isDrawing) för att hålla reda på om elementet skall “dras runt” eller inte.

 */


const icon = document.createElement("p");
icon.textContent = "👌";
icon.cursor = "pointer";
icon.classList.add("icon");
document.querySelector("body").appendChild(icon);


let isDragging = false;
icon.addEventListener("mousedown", function(event) {
    isDragging = true;
});

document.addEventListener("mousemove", function(event) {

    if (isDragging){
        icon.style.left = event.clientX + 'px';
        icon.style.top = event.clientY + 'px';
    }
});

document.addEventListener("mouseup", function(event) {
    isDragging = false;
});


/*
tooltip.textContent = box.getAttribute("data-tooltip");
tooltip.classList.add("tooltip", "hidden");
box.appendChild(tooltip);

box.addEventListener("mouseenter", function(event) {
    tooltip.classList.remove("hidden");
});

box.addEventListener("mouseleave", function(event) {
    tooltip.classList.add("hidden");
});

*/