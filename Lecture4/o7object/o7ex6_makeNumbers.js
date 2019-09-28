

const myObj = {
    name: 'Betty White',
    age: '97',
    salary: '100000',
    job: 'Actress'
};

makeNumbers(myObj);
console.log(myObj); // { name: 'Betty White', age: 97, salary: 100000, job: 'Actress' }

function makeNumbers(obj) {

    for (let key of Object.keys(obj)) {

        const currentValue = obj[key];
        const newValue = parseInt(currentValue);

        if (isNaN(newValue) === false){
            obj[key] = newValue;
        }

    }

}
