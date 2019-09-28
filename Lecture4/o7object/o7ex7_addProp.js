
const betty = {
    name: 'Betty White',
    age: '97',
    salary: '100000',
};
console.log(betty);

addProp(betty, "job", 'Actress');
console.log(betty);

// No return is needed because addProp works with a reference to the original object.
function addProp(obj, key, value) {
    obj[key] = value;
}