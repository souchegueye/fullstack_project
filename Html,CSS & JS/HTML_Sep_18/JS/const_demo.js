//var can't be re declared

const x=1000;

console.log("x value",x);
//duplicate is not allowed


// var x=200;
// x=900;
console.log("x value",x);

// value can' be changed

//var is  local scope
{
const x=300;
console.log("x value",x);

}

//local scope
console.log("x value",x);
