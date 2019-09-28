

const myObj = { id: 1, name: 'Jonas' };
console.log(hasProperty(myObj, 'name')); // true
console.log(hasProperty(myObj, 'surname')); // false


function hasProperty(object, property) {

    return object[property] !== undefined;
    
}