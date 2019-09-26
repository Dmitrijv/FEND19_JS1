


const BOARD_WIDTH = 4;
const BOARD_HEIGHT = 4;

for (let row = 0; row < BOARD_HEIGHT ; row++){
    console.log(buildRowString(row, BOARD_WIDTH));
}


function buildRowString(rowNumber, rowWidth) {

    let currentSquare = ( rowNumber%2 === 0) ? " " : "#";
    let newRow = currentSquare;

    while (rowWidth > 0){

        if (currentSquare === " "){
            newRow += "#";
            currentSquare = "#";

        } else if (currentSquare === "#"){
            newRow += " ";
            currentSquare = " ";
        }

        rowWidth--;

    }

    return newRow;
}


