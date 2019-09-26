


let myArray = [1, 2, 3, 1, 24, 3, 1, 32];

console.log( makeUnique(myArray) );


function makeUnique(array) {

    return array.filter(function (value, index, arr) {
       return arr.indexOf(value) === index;
    });

}


