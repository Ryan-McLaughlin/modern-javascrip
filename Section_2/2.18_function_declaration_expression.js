// function declarations
function greet(firstName = 'Jane', lastName = 'Doe') {
  //   console.log('Greetings');
  return 'Greetings ' + firstName + ' ' + lastName;
}

console.log(greet());
console.log(greet('Taaffeite', 'Canus Lupis'));
console.log('');

// function expressions
const square = function (x = 3) {
  return x * x;
};

console.log(square());
console.log(square(8));
console.log('');

// immediately invokable function expressions - IIFE
// function is declared & run at same time
(function (name) {
  console.log('IIFE Ran.. ' + name);
})('Taaf');
console.log('');

// property methods
const todo = {
  add: function () {
    console.log('Add todo.. ');
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  },
};

todo.delete = function () {
  console.log('Delete todo.. .');
};

todo.hello = function () {
  console.log('HELLO');
};

todo.add();
todo.edit(34);
todo.delete();
todo.hello();
