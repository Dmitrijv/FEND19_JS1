
const values = [5, 3, 8, 1];
console.log(filterRange(values, 1, 4)); // [3, 1]


function filterRange(array, start, end) {

    return array.filter(( value  => value <= end && value >= start ));

}