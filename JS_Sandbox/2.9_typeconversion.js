let val;

// Number to sting
val = String(502);
val = String(10 - 234);

// Bool to string
val = String(true);

// Date to string
val = String(new Date());

// Array to string
val = String([1, 2, 3, 4]);

// toString()
val = (33).toString();
val = true.toString();

// String to number
val = Number("22");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("Taaf");
val = Number([1, 2, 3]);

val = parseInt("100.30");
val = parseFloat("100.30");

// Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed(2));

// Type coersion
const val1 = String(3);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);
