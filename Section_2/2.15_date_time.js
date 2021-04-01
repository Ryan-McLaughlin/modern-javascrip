let val;

const today = new Date();
let birthday = new Date('1-8-1983 11:24:00');
birthday = new Date('January 8 1983');
birthday = new Date('1/8/1983');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); // amount of seconds that have passed since Jan 1st 1970

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1984);
birthday.setHours(3);
birthday.setMinutes(33);
birthday.setSeconds(23);

// console.log(val);
console.log(birthday);
