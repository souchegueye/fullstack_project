function add (x, y) {
  return x * y;
}

console.log ('Traditional function:' + add (2, 3));

//arrow function

var res = (a, b) => a + b;
console.log ('Arrow function: ' + res (2, 3));
