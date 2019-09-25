


const width = 4;
const height = 4;

for (let row = 0; row < height ; row++){

    console.log(buildRowString(row, width));

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


/*

for (let row = 0; row < height ; row++) {
    if (i%2 === 0){
        console.log(buildEvenRowString(width));
    } else {
        console.log(buildOddRowString(width));
    }
}


function buildEvenRowString(width) {
    let string = '';
    for (let j = width; j > 0; j--) {
        if(j%2 === 0){
            string = string + " ";
        } else {
            string = string + "#";
        }
    }
    return string;
}

function buildOddRowString(width) {
    let string = '';
    for (let j = width; j > 0; j--) {
        if(j%2 === 0){
            string = string + "#";
        } else {
            string = string + " ";
        }
    }
    return string;
}


*/



