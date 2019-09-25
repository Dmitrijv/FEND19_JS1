

//console.log(toThePowerOf(2,4));

function toThePowerOf(value, power) {

    let result = value;

    for (let i = power; i > 1; i--) {
       result = result * value;
    }

    return result;
}