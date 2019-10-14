/*

Skriv en CSS-klass (.hide), som gör att elementet inte syns på webbsidan.
Skriv ett Javascript-program som visar nav-elementet när besökaren klickar på knappen.
Programmet skall också ändra texten på knappen till “🔽 Hide menu”
Om användaren klickar på knappen igen så skall nav-elementet döljas igen, och texten på knappen skall återställas till “▶️ Show menu”

Ledtrådar:
I CSS:en kan du använda propertyn “display”, med värdet satt till “none” för att ett element inte skall ritas ut i DOM:en.
Skriv en querySelector som letar upp ett element med ID:t “menu”, och spara i en variabel.
Skriv en querySelector som letar upp ett element med ID:t “toggleMenu”, och spara i en variabel.
Lägg till en “event listener” som lyssnar efter click-eventet på knappen.
Skriv en if-sats som kollar om menyns classList innehåller klassen “hide” med classList.contains()-metoden.
Om den gör det, ta bort klassen “hide” från content-elementets classList och ändra texten på knappen med textContent-propertyn.
Om den inte gör det, lägg till klassen “hide” och ändra tillbaka texten på knappen.


 */

const menu = document.querySelector('#menu');
const toggleButton = document.querySelector('#toggleMenu');

toggleButton.addEventListener('click', function(event) {
    if (menu.classList.contains('hide'))
        menu.classList.remove('hide');
    else
        menu.classList.add('hide');
});


