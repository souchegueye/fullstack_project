/*the rest parameter syntax allows a function to accept an indefinite number of
 arguments as an array
*/
function sum (...Args) {
  let total = 0;
  for (let args of Args) {
    total += args;
  }
  return total;
}

console.log (sum (4, 10, 23));
console.log (sum (6, 1, 2));
