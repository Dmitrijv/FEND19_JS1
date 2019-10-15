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


const BOARD_HEIGHT = 25;
const BOARD_WIDTH = 25;


let activePlayer = 1;
let movesMade = 0;

const playerOneSquares = [];
const playerTwoSquares = [];

document.querySelector("#moves-made").textContent = movesMade+" moves made.";

const table = document.createElement("table");
table.classList.add("gametable");

const title = document.querySelector("#game-title");
//title.classList.add("ownedByPlayer1");

//const tableHeadRow = document.createElement("tr");
//const tableHead = document.createElement("th");

for (let y = 1; y < BOARD_HEIGHT; y++) {

    const tableRow = document.createElement("tr");

    for (let x = 1; x < BOARD_WIDTH; x++) {
        const tableCell = document.createElement("td");
        tableCell.setAttribute("id", "cell-"+x+"-"+y);
        tableCell.addEventListener('click', clickCell);
        //tableCell.textContent = "-";
        tableRow.appendChild(tableCell);
    }

    table.appendChild(tableRow);
}

document.querySelector("#table-anchor").appendChild(table);



function clickCell(event) {

    // this cell is already owned by a player
    if ( (this.classList.contains("ownedByPlayer1")) || this.classList.contains("ownedByPlayer2") )
        return;

    const coordinateNumbers = this.getAttribute("id").match(/\d+/g);
    const clickedCellCoords = {
        x: Number(coordinateNumbers[0]),
        y: Number(coordinateNumbers[1]),
    };

    // add ownership of cell based on which player clicked
    if (activePlayer === 1){
        
        this.textContent = "O";
        this.classList.add("ownedByPlayer1");
        //title.classList.replace("ownedByPlayer1", "ownedByPlayer2");
        playerOneSquares.push(clickedCellCoords);

        if ((hasPlayerWon(clickedCellCoords, playerOneSquares)) === true )
            alert("RED WINS!!!!");

        activePlayer = 2;

    } else {

        this.textContent = "X";
        this.classList.add("ownedByPlayer2");
        //title.classList.replace("ownedByPlayer2", "ownedByPlayer1");
        playerTwoSquares.push(clickedCellCoords);

        if ((hasPlayerWon(clickedCellCoords, playerTwoSquares)) === true )
            alert("BLUE WINS!!!!");

        activePlayer = 1;

    }

    // update move counter
    movesMade++;
    document.querySelector("#moves-made").textContent = movesMade+" moves made.";

}



function hasPlayerWon(clickedCell, ownedCells) {

    if ((getHorizontalNeighbors(clickedCell) >= 4) )
        return true;

    if (getVerticalNeighbors(clickedCell) >= 4)
        return true;

    if (getRightDiagonalNeighbors(clickedCell) >= 4)
        return true;

    if (getLeftDiagonalNeighbors(clickedCell) >= 4)
        return true;

    return false;

    function getVerticalNeighbors(clickedCell) {

        let neigbors = 0;
        const pointerCell = {x: clickedCell.x, y: clickedCell.y};

        // check above
        while (pointerCell.y > 1){
            const northNeighbor = hasNeighborNorth(pointerCell);
            if (northNeighbor){
                neigbors++;
                pointerCell.x = northNeighbor.x;
                pointerCell.y = northNeighbor.y;
            } else {
                break;
            }
        }

        // reset pointer
        pointerCell.x = clickedCell.x;
        pointerCell.y = clickedCell.y;

        // check below
        while (pointerCell.y < BOARD_HEIGHT){
            const southNeighbor = hasNeighborSouth(pointerCell);
            if (southNeighbor){
                neigbors++;
                pointerCell.x = southNeighbor.x;
                pointerCell.y = southNeighbor.y;
            } else {
                break;
            }
        }

        return neigbors;

    }

    function getHorizontalNeighbors(clickedCell) {

        let neigbors = 0;
        const pointerCell = {x: clickedCell.x, y: clickedCell.y};

        // check to the left
        while (pointerCell.x > 1){
            const westNeighbor = hasNeighborWest(pointerCell);
            if (westNeighbor){
                neigbors++;
                pointerCell.x = westNeighbor.x;
                pointerCell.y = westNeighbor.y;
            } else {
                break;
            }
        }

        // reset pointer
        pointerCell.x = clickedCell.x;
        pointerCell.y = clickedCell.y;

        // check to the right
        while (pointerCell.x < BOARD_WIDTH){
            const eastNeighbor = hasNeighborEast(pointerCell);
            if (eastNeighbor){
                neigbors++;
                pointerCell.x = eastNeighbor.x;
                pointerCell.y = eastNeighbor.y;
            } else {
                break;
            }
        }

        return neigbors;

    }
    
    function getRightDiagonalNeighbors() {

        let neigbors = 0;
        const pointerCell = {x: clickedCell.x, y: clickedCell.y};

        // check up right
        while (pointerCell.x > 1){
            const northEastNeighbour = hasNeighborNorthEast(pointerCell);
            if (northEastNeighbour){
                neigbors++;
                pointerCell.x = northEastNeighbour.x;
                pointerCell.y = northEastNeighbour.y;
            } else {
                break;
            }
        }

        // reset pointer
        pointerCell.x = clickedCell.x;
        pointerCell.y = clickedCell.y;

        // check down left
        while (pointerCell.x > 1){
            const southWestNeighbour = hasNeighborSouthWest(pointerCell);
            if (southWestNeighbour){
                neigbors++;
                pointerCell.x = southWestNeighbour.x;
                pointerCell.y = southWestNeighbour.y;
            } else {
                break;
            }
        }

        return neigbors;

    }

    function getLeftDiagonalNeighbors() {

        let neigbors = 0;
        const pointerCell = {x: clickedCell.x, y: clickedCell.y};

        // check up left
        while (pointerCell.x > 1){
            const northWestNeighbour = hasNeighborNorthWest(pointerCell);
            if (northWestNeighbour){
                neigbors++;
                pointerCell.x = northWestNeighbour.x;
                pointerCell.y = northWestNeighbour.y;
            } else {
                break;
            }
        }

        // reset pointer
        pointerCell.x = clickedCell.x;
        pointerCell.y = clickedCell.y;

        // check down right
        while (pointerCell.x < BOARD_HEIGHT){
            const southEastNeighbour = hasNeighborSouthEast(pointerCell);
            if (southEastNeighbour){
                neigbors++;
                pointerCell.x = southEastNeighbour.x;
                pointerCell.y = southEastNeighbour.y;
            } else {
                break;
            }
        }

        return neigbors;

    }

    
    function hasNeighborNorth(cell) {
        return ownedCells.find(function(neighbor) {
            return (neighbor.y-1) === cell.y && neighbor.x === cell.x;
        });
    }

    function hasNeighborNorthEast(cell) {
        return ownedCells.find(function(neighbor) {
            return neighbor.y-1 === cell.y && (neighbor.x+1) === cell.x;
        });
    }

    function hasNeighborEast(cell) {
        return ownedCells.find(( neighbor ) => neighbor.y === cell.y && (neighbor.x-1) === cell.x);
    }

    function hasNeighborSouthEast(cell) {
        return ownedCells.find(( neighbor ) => neighbor.y+1 === cell.y && (neighbor.x+1) === cell.x);
    }

    function hasNeighborSouth(cell) {
        return ownedCells.find(( neighbor ) => (neighbor.y+1) === cell.y && neighbor.x === cell.x);
    }

    function hasNeighborSouthWest(cell) {
        return ownedCells.find(( neighbor ) => (neighbor.y+1) === cell.y && (neighbor.x-1) === cell.x);
    }

    function hasNeighborWest(cell) {
        return ownedCells.find(function(target) {
            return (target.y === cell.y) && ((target.x+1) === cell.x);
        });
    }

    function hasNeighborNorthWest(cell) {
        return ownedCells.find(function(neighbor) {
            return (neighbor.y-1) === cell.y && (neighbor.x-1) === cell.x;
        });
    }

}











