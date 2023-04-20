class Person {
  constructor (name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  display () {
    console.log ('Name' + this.name);
    console.log ('Age' + this.age);
    console.log ('City' + this.city);
  }
}

var p = new Person ('Rosey', 22, 'Chicago');
p.display ();
var p1 = new Person ('Rosey', 22, 'Chicago');
p1.display ();
