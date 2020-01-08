//accepts a string and returns a string in reverse
function reverse(str) {
  let value = "";
  for (let i = str.length - 1; i >= 0; i--) {
    value += str[i];
  }
  return value;
}

//using built in helpers
function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
let here = reverse("hello");

console.log(here);
