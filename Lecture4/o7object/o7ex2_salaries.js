

const salaries = {
    John: 20000,
    Ann: 26000,
    Pete: 23000
};

/*
for (let value of Object.values(salaries)) {
    //console.log(value);
}
*/

const sum = Object.values(salaries).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);