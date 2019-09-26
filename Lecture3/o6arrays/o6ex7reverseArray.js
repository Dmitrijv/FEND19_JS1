

let myArray = [1, 2, 3, 19];

console.log( reverseArray(myArray) );


function reverseArray(array) {

    let reversedArray = [];

    for (let i = array.length-1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }

    return reversedArray;

}


