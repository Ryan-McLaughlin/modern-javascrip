// Create some arrays
const numbers = [34, 535, 23, 87, 234];
const numbers2 = new Array(33, 34, 33, 78, 88);
const fruit = [
  'lemon',
  'lime',
  'guava',
  'tart cherry',
  'gooseberry',
  'cranberry',
  'tamarind',
  'green mango',
  'green apple',
  'star fruit',
];
const mixedTypes = [
  22,
  'fang',
  true,
  undefined,
  null,
  { a: 1, b: 3 },
  new Date(),
];

// console.log(mixedTypes);

let val;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
// numbers[2] = 100;
// Find index of value
val = numbers.indexOf(34);

// Mutating arrays
// // add to end
// numbers.push(250);
// // add to front
numbers.unshift(100);
// // remove from end
// numbers.pop();
// // remove from front
// numbers.shift();
// // splice values
// numbers.splice(1, 2);
// // reverse
// numbers.reverse();

// concatenate
val = numbers.concat(numbers2);

// sorting array
val = fruit.sort();
// val = numbers.sort();

// use "compare funciton"
val = numbers.sort(function (x, y) {
  return x - y;
});

// reverse sort
val = numbers.sort(function (x, y) {
  return y - x;
});

// find
function under50(num) {
  return num < 50;
}

val = numbers.find(under50);

// console.log(numbers);
console.log(val);
