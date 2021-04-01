const id = 100;

// equal to
if (id == 102) {
  console.log('true');
} else {
  console.log('false');
}

// not equal to
if (id != 100) {
  console.log('true');
} else {
  console.log('false');
}

// check value and type
if (id === 100) {
  console.log('True');
} else {
  console.log('False');
}

if (id !== 102) {
  console.log('True');
} else {
  console.log('False');
}
console.log('');

// const id2 = '232';

// test if undefined
if (typeof id2 !== 'undefined') {
  console.log(`ID 2 is ${id}`);
} else {
  console.log('No ID 2');
}
console.log('');

// greater or less than
if (id < 200) {
  console.log('Yes');
} else {
  console.log('No');
}
console.log('');

// if else
const color = 'purple';
if (color === 'green') {
  console.log('Color is green');
} else if (color === 'blue') {
  console.log('Color is blue');
} else if (color === 'brown') {
  console.log('Color is brown');
} else {
  console.log('yawn');
}
console.log('');

const name = 'Taaffeite';
const age = 28;

if (age > 0 && age < 13) {
  console.log(`${name} is a chile`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// or ||
if (age < 16 || age >= 65) {
  console.log(`${name} is ineligible for race due to age restriction`);
} else {
  console.log(`${name} meets age requirement for race`);
}
console.log('');

// ternary operator
console.log(id === 100 ? 'correct' : 'incorrect');

// no curlys
if (id === 100) console.log('100');
else console.log('not 100');
