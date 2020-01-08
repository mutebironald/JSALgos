/**
 * write a function called collectStrings which accepts an object
 * and returns an array of all the values in the object that have a typeof string.
 */
//solution with helper method --- helper method recursion
function collectStrings(obj) {
  let newArray = [];
  function gatherStrings(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
        return gatherStrings(obj[key]);
      } else if (typeof obj[key] === "string") {
        newArray.push(obj[key]);
      }
    }
  }
  gatherStrings(obj);
  return newArray;
}

function collectStrings(obj) {
  let newArray = [];
  for (let key in obj) {
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newArray = newArray.concat(collectStrings(obj[key]));
    } else if (typeof obj[key] === "string") {
      newArray.push(obj[key]);
    }
  }
  return newArray;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
};

let val = collectStrings(obj); // ["foo", "bar", "baz"])
console.log(val, "++++++++");
