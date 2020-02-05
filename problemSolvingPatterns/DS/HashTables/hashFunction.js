function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

function hash(key, arrayLen) {
  let total = 0;
  //helps in making distribution better
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

//strategies for handling collisions
// *separate chaining ( store things together)
//* linear probing( look forward ahead for the next empty slot)

let res = hash("oinh", 4)
console.log(res)
