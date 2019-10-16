/*

Du skall med hjälp av HTML, CSS och Javascript göra ett fem-i-rad-spel.
Du skall skapa en HTML-sida, som när den visas i webbläsaren innehåller:
En rubrik med spelets namn (du kan välja ett eget namn om du vill)
Ett spelbräde.
Ett textfält (<p>-tagg) som berättar vems tur det är att göra ett drag, O eller X.
Ett textfält (<p>-tagg) som berättar hur många drag som har gjorts totalt.
Spelbrädet skall bestå av ett rutfält med knappar (<button>).
Det skall vara åtminstone 25 knappar i höjdled och 25 knappar i sidled stort.
Den spelare vars tur det är kan klicka på en knapp som inte redan blivit klickad på.
När spelaren gör det skall spelaren vars tur det är få sin markering på den knappen.
Om det är X tur att klicka, så kan denne alltså klicka på en knapp, som då får markeringen “X”.
Då går turen över till O.
När en knapp väl blivit klickad på så skall det inte hända något om någon av spelarna klickar på den igen.
Du får styla spelet på vilket sätt du själv vill.

Krav för godkänt:

Du kan skapa spelbrädet som du vill, antingen genom att skriva HTML, eller skapa elementen med Javascript.
Ditt program skall hålla reda på vems tur det är, och hur många drag som har gjorts sammanlagt.
Detta skall visas i varsitt textfält (<p>-tagg).
Du kan använda bokstäverna O och X som märken för kryss och cirkel.
Du ska ha använt minst 4 CSS-klasser när du har stylat spelet. Varje klass måste innehålla minst en deklaration.


Krav för väl godkänt:

Minst uppfyllt kraven för godkänt.
Du måste ha skapat själva spelbrädet (alltså knapparna) med hjälp av Javascript.
Du skall ha en eller flera variabler som gör att du kan ändra på antal rutor på spelbrädet.
Märkena, alltså X och O, skall antingen vara stylade med en färg,
eller använda en emoji istället för text (t.ex. ❌ ⭕️, eller annan valfri om du tycker det är roligare),
eller använda sig av en bild av något slag.
Varje gång en spelare gjort ett drag skall ditt program kontrollera om någon av spelarna har vunnit
(alltså fått minst 5 symboler i rad horisontellt, vertikalt eller diagonalt).
Om någon av spelarna har vunnit skall detta presenteras i ett eget textfält, och det skall inte gå att spela vidare.

 */

const BOARD_HEIGHT = 18;
const BOARD_WIDTH = 18;

const WINNING_LINE_LENGTH = 5;

let activePlayer = 1;

const player1Cells = [];
const player2Cells = [];

function clearPlayerCells(cells) {
    for (let i = 0; i < cells.length; i++) {
        const cell = document.querySelector("#cell-"+cells[i].x+"-"+cells[i].y);
        cell.classList.remove("ownedByPlayer1", "ownedByPlayer2");
        cell.textContent = "";
    }
}


const movesMadeLabel = document.querySelector("#moves-made");
function updateMovesMadeLabel(movesMade) {
    if(movesMade === 0)
        movesMadeLabel.textContent = "Five In A Row";
    else if (movesMade === 1)
        movesMadeLabel.textContent = movesMade+" move made";
    else
        movesMadeLabel.textContent = movesMade+" moves made";
}
updateMovesMadeLabel(player1Cells.length + player2Cells.length);



const p1TurnSpan = document.querySelector("#player1Turn");
p1TurnSpan.classList.add("player1Status", "inactive");
p1TurnSpan.innerText = "Reds turn";

const p2TurnSpan = document.querySelector("#player2Turn");
p2TurnSpan.classList.add("player2Status", "inactive");
p2TurnSpan.innerText = "Blues turn";

function updateTurnLabel(activePlayer) {
    if (activePlayer === 1){
        p1TurnSpan.classList.remove("inactive");
        p2TurnSpan.classList.add("inactive");
    } else if (activePlayer === 2) {
        p1TurnSpan.classList.add("inactive");
        p2TurnSpan.classList.remove("inactive");
    }
}
updateTurnLabel(activePlayer);



const table = document.querySelector("#game-table");
const tbody = document.createElement("tbody");

const gameInfoCell = document.querySelector("table thead tr th");
gameInfoCell.setAttribute("colspan", BOARD_WIDTH+"");

// create table cells
for (let y = 1; y <= BOARD_HEIGHT; y++) {
    const tableRow = document.createElement("tr");
    for (let x = 1; x <= BOARD_WIDTH; x++) {
        const tableCell = document.createElement("td");
        tableCell.setAttribute("id", "cell-"+x+"-"+y);
        tableCell.addEventListener('click', clickCell);
        tableCell.addEventListener('mouseenter', mouseEnterCell);
        tableCell.addEventListener('mouseleave', mouseLeaveCell);
        tableRow.appendChild(tableCell);
    }
    tbody.appendChild(tableRow);
}
table.appendChild(tbody);



function mouseEnterCell(event) {
    if (!(this.classList.contains("ownedByPlayer1") || this.classList.contains("ownedByPlayer2")))
        this.classList.add("player"+activePlayer+"Mouseover");
}

function mouseLeaveCell(event) {
    this.classList.remove("player1Mouseover", "player2Mouseover");
}

function clickCell(event) {

    // if this cell is already owned by a player do nothing
    if ( (this.classList.contains("ownedByPlayer1")) || this.classList.contains("ownedByPlayer2") )
        return;

    this.classList.remove("player1Mouseover", "player2Mouseover");

    const coordinateNumbers = this.getAttribute("id").match(/\d+/g);
    const clickedCell = {
        x: Number(coordinateNumbers[0]),
        y: Number(coordinateNumbers[1]),
    };

    let winConditionMet = false;

    // add ownership of cell based on which player clicked
    if (activePlayer === 1){
        this.textContent = "O";
        this.classList.add("ownedByPlayer1");
        player1Cells.push(clickedCell);
        winConditionMet = hasPlayerWon(clickedCell, player1Cells);
    } else {
        this.textContent = "X";
        this.classList.add("ownedByPlayer2");
        player2Cells.push(clickedCell);
        winConditionMet = hasPlayerWon(clickedCell, player2Cells);
    }

    // congratulate winner and clear board
    if (winConditionMet === true){
        if (activePlayer === 1)
            alert("Red wins !!!");
        else
            alert("Blue wins !!!");
        clearPlayerCells(player1Cells);
        player1Cells.length = 0;
        clearPlayerCells(player2Cells);
        player2Cells.length = 0;
        activePlayer = 1;
    // change active player
    } else {
        if (activePlayer === 1)
            activePlayer = 2;
        else
            activePlayer = 1;
    }

    updateTurnLabel(activePlayer);
    updateMovesMadeLabel(player1Cells.length + player2Cells.length);

}



function hasPlayerWon(clickedCell, ownedCells) {

    if (countHorizontalNeighbors(clickedCell) >= WINNING_LINE_LENGTH-1)
        return true;

    if (countVerticalNeighbors(clickedCell) >= WINNING_LINE_LENGTH-1)
        return true;

    if (countRightDiagonalNeighbors(clickedCell) >= WINNING_LINE_LENGTH-1)
        return true;

    if (countLeftDiagonalNeighbors(clickedCell) >= WINNING_LINE_LENGTH-1)
        return true;

    return false;


    function countVerticalNeighbors(clickedCell) {
        return consecutiveCells(clickedCell, getNeighbourNorth) + consecutiveCells(clickedCell, getNeighbourSouth);
    }

    function countHorizontalNeighbors(clickedCell) {
        return consecutiveCells(clickedCell, getNeighbourWest) + consecutiveCells(clickedCell, getNeighbourEast);
    }
    
    function countRightDiagonalNeighbors(clickedCell) {
        return consecutiveCells(clickedCell, getNeighbourNorthEast) + consecutiveCells(clickedCell, getNeighbourSouthWest);
    }

    function countLeftDiagonalNeighbors(clickedCell) {
        return consecutiveCells(clickedCell, getNeighbourNorthWest) + consecutiveCells(clickedCell, getNeighbourSouthEast);
    }


    function consecutiveCells(clickedCell, neighbourDirectionCheck) {
        let neigbors = 0;
        const pointerCell = {x: clickedCell.x, y: clickedCell.y};
        const longestDistance = (BOARD_WIDTH > BOARD_HEIGHT) ? BOARD_WIDTH : BOARD_HEIGHT;
        while (neigbors < longestDistance){
            const neighbourCell = neighbourDirectionCheck(pointerCell);
            if (neighbourCell){
                neigbors++;
                pointerCell.x = neighbourCell.x;
                pointerCell.y = neighbourCell.y;
            } else {
                break;
            }
        }
        return neigbors;
    }

    
    function getNeighbourNorth(cell) {
        return ownedCells.find(( neighbor ) => neighbor.y-1 === cell.y && neighbor.x === cell.x);
    }

    function getNeighbourNorthEast(cell) {
        return ownedCells.find(( neighbor ) => neighbor.y-1 === cell.y && neighbor.x+1 === cell.x);
    }

    function getNeighbourEast(cell) {
        return ownedCells.find(( neighbor ) => neighbor.y === cell.y && (neighbor.x-1) === cell.x);
    }

    function getNeighbourSouthEast(cell) {
        return ownedCells.find(( neighbor ) => neighbor.y+1 === cell.y && (neighbor.x+1) === cell.x);
    }

    function getNeighbourSouth(cell) {
        return ownedCells.find(( neighbor ) => neighbor.y+1 === cell.y && neighbor.x === cell.x);
    }

    function getNeighbourSouthWest(cell) {
        return ownedCells.find(( neighbor ) => neighbor.y+1 === cell.y && neighbor.x-1 === cell.x);
    }

    function getNeighbourWest(cell) {
        return ownedCells.find(( neighbor ) => neighbor.y === cell.y && ((neighbor.x+1) === cell.x));
    }

    function getNeighbourNorthWest(cell) {
        return ownedCells.find(( neighbor ) => neighbor.y-1 === cell.y && neighbor.x-1 === cell.x);
    }

}









