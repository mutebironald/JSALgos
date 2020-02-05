Object.defineProperty(Array.prototype, "flat", {
  value: function(depth = 1) {
    return this.reduce(function(flat, toFlatten) {
      return flat.concat(
        Array.isArray(toFlatten) && depth > 1
          ? toFlatten.flat(depth - 1)
          : toFlatten
      );
    }, []);
  }
});

function flatten(arr) {
  // add whatever parameters you deem necessary - good luck!
  // return
  console.log(arr.flat());
}

flatten([1, 2, 3, [4, 5]]);

//alternative solution 1

function flatten(oldArr) {
  var newArr = [];
  for (let i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

//alternative solution 2
function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      //push back array items, wont modify the original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  return res;
}

//alternative solution 3
function* flatten(array, depth) {
  if (depth === undefined) depth = 1;
  for (const item of array) {
    if (Array.isArray(item) && depth > 0) {
      yield* flatten(item, depth - 1);
    } else {
      yield item;
    }
  }
}

var arr = [1, 2, [3, 4, [5, 6]]];
const flattened = [...flatten(arr, Infinity)];

let result = flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])
console.log(result)


// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
