
const ArrayMaster = {

    getFirst: function(array) {
        return array[0];
    },

    getLast: function(array) {
        return array[array.length-1];
    },

    getN: function(array, position) {
        const index = position - 1;
        if (typeof array[index] !== 'undefined'){
            return array[index];
        }
        return -1;
    },

    max: function (array) {
        return Math.max(...array);
    },
    
    sum: function (array) {
        return array.reduce(function (sum, value) {
            return sum + value;
        }, 0);
    }
    
};


const array = [11, 15, 99, 5];

console.log(ArrayMaster.getFirst(array));

console.log(ArrayMaster.getLast(array));

console.log(ArrayMaster.getN(array, 3));

console.log(ArrayMaster.max(array));

console.log(ArrayMaster.sum(array));


