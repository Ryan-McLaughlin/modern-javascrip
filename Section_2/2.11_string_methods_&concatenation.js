const firstName = 'Taaffeite';
const surName = 'Canidae';
const lastName = 'Canus Lupis';
const age = 38;
const str = 'Time to feast!';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;
console.log(val);

// Append
val = 'Ryan ';
val += 'Mc Laughlin';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping use \
// val = 'That\'s awesome, I can not wait!';
val = "That's awesome, I can not wait!"; // changed with prettier extension

// Length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('e');
val = firstName.lastIndexOf('e');

// charAt()
val = firstName.charAt('2');

// get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substr(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('feast', 'feed');

// inclucdes()
val = str.includes('to');
val = str.includes('foo');

console.log(val);
