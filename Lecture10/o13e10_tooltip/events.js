/*

Box-klassen skall ha padding på 20px, vara minst 200px bred, samt ha position:relative.
Du får lägga ytterligare styling om du vill.

När användarens muspekare förs över ett div-element med klassen “box” skall det
läggas till ett nytt p-element inuti div-elementet.
P-elementet skall ha en klass som gör att det ligger placerat i övre högra hörnet av div-elementet.
Innehållet i P-elementet skall vara samma som innehållet i div-elementets data-attribut “tooltip”.
När användaren fört bort muspekaren från div-elementet skall P-elementet tas bort.

 */


const box = document.querySelector(".box");

const tooltip = document.createElement("p");
tooltip.textContent = box.getAttribute("data-tooltip");
tooltip.classList.add("tooltip", "hidden");
box.appendChild(tooltip);

box.addEventListener("mouseenter", function(event) {
    tooltip.classList.remove("hidden");
});

box.addEventListener("mouseleave", function(event) {
    tooltip.classList.add("hidden");
});
