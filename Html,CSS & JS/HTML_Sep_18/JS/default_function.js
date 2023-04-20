function greet (name = 'Mohamed') {
  console.log ('Hello ${name}');
  console.log ('Hello,' + name);
}

greet ();
greet ('Mohamed');

// a function to show the result of two numbers
function calc (res = 2 + 3) {
  console.log ('The result is ' + res);
}

calc ();
calc (2 + 3);
