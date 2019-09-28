

const correct = { name: '', address: '', email: ''};
const user = { name: 'Jonas', job: 'Developer / Teacher'};

console.log(streamLine(correct, user)); // { name: 'Jonas', address: '', email: '' }


function streamLine(correctObj, originalObj) {

    const newObject = {};

    for (let key of Object.keys(correctObj)) {
        // const beverage = (age >= 21) ? "Beer" : "Juice"
        newObject[key] = (typeof originalObj[key] !== 'undefined') ? originalObj[key] : '';
    }

    return newObject;

}