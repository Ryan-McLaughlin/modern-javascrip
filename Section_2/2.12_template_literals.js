const name = 'Taaffeite';
const age = 38;
const job = 'Web Developer';
const city = 'North Island Outskirts';
let html;

// Without template strings (es5)
html =
  '<ul><li>Name: ' +
  name +
  '</li><li>Age: ' +
  age +
  '</li><li>Job: ' +
  job +
  '</li><li>City: ' +
  city +
  '</li></ul>';

function hello() {
  return 'Hello ' + name;
}

// With template strings (literals) (es6)
html = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
<li>${2 + 2}</li>
<li>${hello()}</li>
<li>${age > 30 ? 'Is over 30' : 'Is under 30'}</li>
</ul>
`;

document.body.innerHTML = html;
