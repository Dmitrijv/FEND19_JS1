

let myArray = [1, 2, "flower", NaN, null, "", undefined];

console.log(getN(myArray,2));
console.log(getN(myArray,4));
console.log(getN(myArray,5));
console.log(getN(myArray,6));
console.log(getN(myArray,7));

function getN(array, index) {

    index = index - 1;

    if ( isNaN(array[index] * 1) === false ){
        return array[index];
    }

    return -1;
}


