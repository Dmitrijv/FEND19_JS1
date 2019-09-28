

const myObj = { id: 1 };
console.log(isEmpty(myObj)); // false

const otherObj = {};
console.log(isEmpty(otherObj)); // true

function isEmpty(object) {

    return Object.keys(object).length === 0;
    
}


