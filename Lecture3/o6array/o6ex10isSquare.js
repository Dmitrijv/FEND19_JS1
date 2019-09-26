

let myMultiArray = [
    [1, 2, 3],
    [4, 5, 6],
    [4, 5, 6, 3, 1],
    [7, 9, 2]
];

console.log( checkIfSquare(myMultiArray, 1) );


function checkIfSquare(multiArray) {

    for (let i = 0; i < multiArray.length; i++) {

        const row = multiArray[i];
        if ( !(row.length === myMultiArray.length) )
            return false;

    }

    return true;

}



