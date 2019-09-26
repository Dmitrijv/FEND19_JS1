



let myMultiArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log( sumRow(myMultiArray, 1) );


function sumRow(multiArray, rowNumber) {

    return multiArray[rowNumber-1].reduce(function (sum, value) {
        return sum + value;
    }, 0);

}


