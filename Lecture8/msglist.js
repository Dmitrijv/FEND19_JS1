/* Ex 11

Listsök.
Skriv en funktion som tar emot två argument: en element-nod, som skall vara en ordered list, eller en unordered list, samt ett heltal.
Innan funktionen kör vidare, kontrollera först att element-noden är av rätt typ (det finns en property som heter tagName), och att det andra argumentet är ett positivt heltal som inte är högre än antalet child elements i listan. Annars skall du returnera “false”, eller en sträng med ett felmeddelande.
Om funktionen fått en lista, samt ett heltal, skall du leta upp det listitem som finns på den positionen heltalet har.
I detta listitem, så skall du söka tills du hittar en textnod (det finns en property som heter nodeType) som har meningsfullt innehåll (alltså inte bara radbryt och mellanslag).
Du kan rensa bort whitespace som radbryt och mellanslag med trim()-metoden på strängar.
Du får skapa hjälpfunktioner.


* */

const msgList = document.getElementById('msgList');


//findItemText(msgList, 1);
console.log(findItemText(msgList, 2));


function findItemText(msgList, position) {

    if (msgList.tagName !== "UL" && msgList.tagName !== "OL")
        return "ERR: not a list";

    if (position < 0 || position > msgList.childElementCount-1 || !Number.isInteger(position))
        return "ERR: out of range";

    let liIndex = 0;
    for (let i = 0; i < msgList.childNodes.length; i++) {

        const node = msgList.childNodes[i];

        if (node.tagName !== "LI")
            continue;

        if (liIndex === position)
            return getFirstValidNode(node.childNodes) || "ERR: no valid item";
        else
            liIndex++;

    }

}


// node types
// 1 - element
// 2 - attr ??
// 3 - text
function getFirstValidNode(nodeList) {

    for (let i = 0; i < nodeList.length; i++) {

        const node = nodeList[i];

        if ((node.nodeType === 3) && isValidValue(node.nodeValue))
            return node.nodeValue.trim();
        else if (node.nodeType === 1)
            return getFirstValidNode(node.childNodes);

    }

    return null;

    function isValidValue(value) {
        return (typeof value === "string") && (value.trim().length > 0);
    }

}


