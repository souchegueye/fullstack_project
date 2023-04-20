// call readline
var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);
rl.question("How do you feel today? ", function(answer) {
// ask a question to interact with user. 

console.log("Have a great day!");

// close the program
rl.close();
});