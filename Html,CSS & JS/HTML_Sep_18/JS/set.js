const empid = new Set ();

empid.add (10011);
empid.add (10012);
empid.add (10013);
empid.add (10014);
empid.add (10015);

console.log (empid.size);
console.log (empid);

console.log (empid.has (10011));
console.log (empid.has (10022));
console.delete (10012);
console.log (empid);

for (let values of empid) {
  console.log (values);
}
