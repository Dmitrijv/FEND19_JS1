/*

Skriv en CSS-klass (.hide), som gör att elementet inte syns på webbsidan.
Skriv ett Javascript-program som visar article-elementet när besökaren klickar på knappen.

Ledtrådar:
I CSS:en kan du använda propertyn “display”, med värdet satt till “none” för att ett element inte skall ritas ut i DOM:en.
Skriv en querySelector som letar upp ett element med ID:t “content”, och spara i en variabel.
Skriv en querySelector som letar upp ett element med ID:t “show”, och spara i en variabel.
Lägg till en “event listener” som lyssnar efter click-eventet på knappen.
I listener-funktionen, ta bort klassen “hide” från content-elementets classList

 */

const showButton = document.querySelector('#show');
const article = document.querySelector('#content');

showButton.addEventListener('click', function(event) {
    article.classList.remove("hide");
});