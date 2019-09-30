
const myObj = {
    a: "23",
    b: "3",
};

console.log(delete myObj.a);

console.log(myObj);


function filterDuplicates(list) {


    console.log(list);
    const returnList = [];

    for (let i = 0; i < list.length; i++) {
        if (returnList.includes(list[i]) === false){
            returnList.push(list[i]);
        }
    }

    console.log(returnList);
    return returnList;

}

const actions = [
    'LOG_IN',
    'CALL_SERVER',
    'UPLOAD',
    'CALL_SERVER',
    'CALL_SERVER',
];

const filteredActions = filterDuplicates(actions);

