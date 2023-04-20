//var can be re declared

var x =100;
console.log("x value",x);

var x=200;
console.log("x value",x);

// value can be changed

x = 300;

//var is not local scope
{
var x=300;
console.log("x value",x);

}
//Global scope
console.log("x value",x);
