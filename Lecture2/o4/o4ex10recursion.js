

//console.log(isNumberEven(0));
//console.log(isNumberEven(1));
//console.log(isNumberEven(2));
//console.log(isNumberEven(3));
//console.log(isNumberEven(16));
//console.log(isNumberEven(5523));
console.log(isNumberEven(-4));



function isNumberEven(number) {

    // normalise negative numbers
    if (number < 0)
        number = -number;

    if (number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    }

    return isNumberEven(number - 2);

}














/*

    number = Number(number);
    if ( isNaN(number) ){
        console.log("invalid input");
    }

 */




