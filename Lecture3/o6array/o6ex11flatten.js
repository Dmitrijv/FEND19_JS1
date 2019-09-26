



let myMultiArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 9]
];

console.log( flatten(myMultiArray, 1) );


function flatten(multiArray) {

    let flatArray = [];

    for (let i = 0; i < multiArray.length; i++) {

        const row = multiArray[i];

        for (let j = 0; j < row.length; j++) {
            flatArray.push(row[j]);
        }

    }

    return flatArray;

}


