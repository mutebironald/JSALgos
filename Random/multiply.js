const a = [1, 2, 3, 4, 5, 6];

//implement a.multiply()

Array.prototype.multiply = function() {
  let x = [...Object.values(this)];

  for (i = 0; i < this.length; i++) {
    x.push(this[i] * this[i]);
  }
  console.log(x);
};

a.multiply();
