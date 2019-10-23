

/* function 1a */
const sayHi = function() {
    alert('Hi!')
};

const sayHiArrow = () => { alert('Hi!') };


/* function 1b */
const double = function(n) {
    return n * 2
};

const doubleArrow = (n) => { return n * 2 };


/* function 1c */
function isEven(val) {
    return val % 2 === 0
}

const isEvenArrow = (val) => { return val % 2 === 0 };

/* function 1d */
const sum = function(a, b) {
    return a + b
};


const sumArrow = (a,b) => {return a + b};

/* function 1e */


function filterRange(arr, a, b) {
    return arr.filter(function(item) {
        return a <= item && item <= b
    })
}

const filterRangeArrow = (arr, a, b) => {
    return arr.filter((item) => { return a <= item && item <= b });
};


