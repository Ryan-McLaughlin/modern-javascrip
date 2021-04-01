// for loop
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log('2 is 2, now continue');
    continue;
  }
  if (i === 7) {
    console.log('break loop');
    break;
  }
  console.log(`index: ${i}`);
}
console.log('');

// while loop
let j = 0;
while (j < 10) {
  console.log('j: ' + j);
  j++;
}
console.log('');

// do while
let k = 100;

do {
  console.log('k: ' + k);
  k++;
} while (k < 10);
console.log('');

const fruits = [
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

// for
for (let l = 0; l < fruits.length; l++) {
  console.log(fruits[l]);
}
console.log('');

// forEach
fruits.forEach(function (fruit) {
  console.log(fruit);
});
console.log('');

fruits.forEach(function (fruit, index, array) {
  console.log(`${index}: ${fruit}`);
  //   console.log(array);
});

console.log('');

// map
const users = [
  { id: 1, name: 'Taaf' },
  { id: 2, name: 'Dusk' },
  { id: 3, name: 'Luna' },
  { id: 4, name: 'Nimbi' },
];

const ids = users.map(function (user) {
  return user.id;
});
console.log(ids);
console.log('');

// for in
const user = {
  first: 'Taaffeite',
  sur: 'Canidae',
  last: 'Canus Lupis',
  age: 17,
};

for (let x in user) {
  console.log(`${x}: ${user[x]}`);
}
