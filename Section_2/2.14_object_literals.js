const wolf = {
  firstName: 'Taaffeite',
  lastName: 'Canus Lupis',
  age: 38,
  email: 'taffy.wolf@gmail.com',
  hobbies: ['reading', 'hunting'],
  address: {
    city: 'Outskirts',
    state: 'North Island',
  },
  getBirthYear: function () {
    return 2021 - this.age;
  },
};

let val;

val = wolf;

// get specific value
val = wolf.firstName; // preferred
val = wolf['firstName'];
val = wolf.age;
val = wolf.hobbies[0];
val = wolf.address.state;
val = wolf.address['city'];
val = wolf.getBirthYear();

console.log(val);

const wolves = [
  { name: 'Tiff', age: 22 },
  { name: 'Dusk', age: 32 },
];
wolves.push({ name: wolf.firstName, age: wolf.age });

for (let i = 0; i < wolves.length; i++) {
  console.log(wolves[i].name);
}
