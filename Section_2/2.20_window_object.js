// dom is part of window object
// window object is global object in client side js
// node.js is javascript runtime that runs as a standalone process on your computer
// clientside js (this course) the window/browser is global environment
// node js and chrome use V8 JavaScript engine

// Window Methods / Objects Properties

// Alert
// window.alert('ALERT');
// alert('Alert');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if (confirm('you sure')) {
//   console.log('yes');
// } else {
//   console.log('no');
// }

let val;

// Outer height / width
val = window.outerHeight;
val = window.outerWidth;

val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
// val = window.location.search;

// Redirect
// window.location.href = 'https://google.com';

// Reload
// window.location.reload();

// History Object
// window.history.go(-1);
window.history.length;

// Navigator Object (named after Netscape Navigator)
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);
