const emp = new Map ();

emp.set ('name', 'Mohamed');
emp.set ('age', 35);
emp.set ('country', 'USA');

console.log (emp.size);

console.log (emp.get ('name'));
console.log (emp.get ('Country'));

for (let [key, value] of emp) {
  console.log (key + ':' + value);
}
