/*

Varje knapp har ett data-attribut som visar vilken tab som visar vilket innehåll.
Innehållet i deras data-attribut matchar ett data-attribut i div-elementen.
När besökaren klickar på en knapp skall den matchande div:en visas, och de andra skall vara osynliga.

 */

const buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        const tabToShow = this.getAttribute("data-tab");

        document.querySelectorAll("div").forEach(function(div) {
            if (div.getAttribute('data-content') === tabToShow)
                div.classList.remove('hide');
            else
                div.classList.add('hide');
        });

    });
});
