var reg_nos = [10011, 20043, 10065, 48859, 200543, 4000654];

console.log ('Before Pop Method:' + reg_nos);
reg_nos.pop ();
console.log ('After Pop Method:' + reg_nos);

console.log ('Before Push Method:' + reg_nos);
reg_nos.push ('55555');
console.log ('After Push Method:' + reg_nos);

console.log ('Before shift Method:' + reg_nos);
reg_nos.shift ();
console.log ('After shift Method:' + reg_nos);

console.log ('Before Unshift Method:' + reg_nos);
reg_nos.unshift ();
console.log ('After Unshift Method:' + reg_nos);

delete reg_nos[3];
console.log ('after delete:' + reg_nos);

console.log ('Array iteration using for loop');
for (let i = 0; i < reg_nos.length; i++) {
  console.log (reg_nos[i]);
}

console.log ('Array iteration using for each');
reg_nos.forEach (r => {
  console.log (r);
});
