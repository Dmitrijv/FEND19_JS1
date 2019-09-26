

let myArr = [4111, 1, 322, 7, 22, 352, 1, 6];
console.log( myArr );

console.log( bubbleSort(myArr) );


function bubbleSort(myArr) {
    for (let i = 0; i < myArr.length; i++) {
        floatHighestValueRight(myArr);
    }
    return myArr;
}


function floatHighestValueRight(array) {

    for (let i = 0; i < array.length; i++) {

        const currentValue = array[i];
        const nextValue = array[i+1];

        if (currentValue > nextValue){
            array[i] = nextValue;
            array[i+1] = currentValue;
        }

    }

}