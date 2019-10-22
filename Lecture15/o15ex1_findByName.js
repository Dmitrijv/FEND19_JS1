
const hayStack = [
    {
        id: 0,
        name: 'Straw'
    },
    {
        id: 1,
        name: 'Grass'
    },
    {
        id: 2,
        name: 'Needle'
    },
    {
        id: 3,
        name: 'Stick'
    }
];

console.log(findByName('Needle', hayStack)); // {id: 2, name: "Needle"}

function findByName(name, array) {

    return array.find(( stackItem ) => stackItem.name === name);

}
