const { countCats } = require('../src/count-cats.js');

let count = countCats([
    [0, 1, '^^'],
    [0, '^^', 2],
    ['^^', 1, 2]
]);

console.log(count);