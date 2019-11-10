

const string = 'arithmetics';
const map = string.split("").reduce((map, letter) => { map[letter] = ~~map[letter] + 1; return map}, {});
console.log(map); // { a: 1, r: 1, i: 2, t: 2, h: 1, m: 1, e: 1, c: 1, s: 1 }
