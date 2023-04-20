const now = new Date ();
console.log (now);
console.log (now.getDate ());
console.log (now.getMonth ());
console.log (now.getFullYear ());
console.log (now.getHours ());
console.log (now.getMinutes ());
console.log (now.getSeconds ());

const birthday = new Date ('February 24, 1988');
console.log (birthday);
console.log (birthday.toLocaleDateString ());
console.log (birthday.toLocaleString ());
birthday.setDate (34);
console.log (birthday);
birthday.setMonth (4);
console.log (birthday);
birthday.setFullYear (1990);
console.log (birthday);
