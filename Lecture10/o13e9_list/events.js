/*

För varje meddelande skall du skapa ett list-element som läggs till i notifications-listan.
Varje list-element skall ha ett meddelande, samt en knapp med X som textinnehåll.
När besökaren klickar på knappen så skall det meddelanden tas bort ur DOM:en.


 */


const messages = [
    'WYD?',
    'Call your moms',
    'Fix laundry'
];

const list = document.querySelector("#notifications");

for (let i = 0; i < messages.length; i++) {

    const message = messages[i];

    const listItem = document.createElement('li');

    const newButton = document.createElement("button");
    newButton.textContent = message;
    newButton.addEventListener("click", function(event) {
        list.removeChild(listItem);
    });

    listItem.appendChild(newButton);
    list.appendChild(listItem);

}
