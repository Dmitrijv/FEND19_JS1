

const myObj = {
    Name: 'Jonas',
    SurName: 'Stattin'
};

const newObj = lowerCaseProperties(myObj);
console.log(newObj); // { name: 'Jonas', surname: 'Stattin' }

function lowerCaseProperties(originalObject) {

    const newObject = {};

    for (let originalKey of Object.keys(originalObject)) {

        const newKey = originalKey.toLowerCase();
        newObject[newKey] = originalObject[originalKey];

    }

    return newObject;

}