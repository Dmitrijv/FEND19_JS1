

let myArray = [1, 2, 3, 19];

console.log( sum(myArray) );


function sum(array) {

    return array.reduce(function (sum, value) {
        return sum + value;
    }, 0);

}





