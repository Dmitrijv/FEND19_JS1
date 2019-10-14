/*

Skapa två CSS-klasser, “off” och “on”, du kan styla dem hur du vill så länge du ser skillnad mellan dem (en kan ha mörk bakgrund, den andra ljus, tex)
Skriv ett Javascript-program som gör så att när besökaren för sin muspekare över div-elementet så tas klassen “off” bort, och klassen “on” läggs till.
Programmet skall också byta innehållet till “You caught me!? 😮”.
När användaren sedan för bort sin muspekare från elementet igen så skall programmet byta tillbaka både klasserna, och innehållet igen, så att det ser likadant ut som innan.

Ledtrådar:
Leta upp div-elementet med querySelector, och h1-elementet med en annan querySelector.
Lägg till en eventlistener på div-elementet med addEventListener(). Den här gången skall du lyssna efter eventet “mouseenter”.
I eventlisterns funktion kan du använda classList.replace() för att byta ut klassen “off” mot “on” på div-elementet.
Du kan också ändra textinnehållet på h1-elementet med textContent-propertyn.
Lägg nu till en ny event listener på div-elementet, den här skall lyssna efter “mouseleave”.
I den här eventlisterns funktion skall du byta tillbaka klasserna, så att du byter “on” mot “off”.
Återställ även texten i h1-elementet med textContent.


 */

const target = document.querySelector('#target');

target.addEventListener('mouseenter', function(event) {
    if (target.classList.contains('off')){
        target.classList.replace('off', 'on');
        target.textContent = "You caught me!? 😮"
    }
});

target.addEventListener('mouseleave', function(event) {
    if (target.classList.contains('on')){
        target.classList.replace('on', 'off');
        target.textContent = "You can't catch me 😎";
    }
});



