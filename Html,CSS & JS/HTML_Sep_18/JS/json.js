// Java Script Object notation - Json

const Person = {
  name: 'Mohamed',
  age: 30,
  hobbies: ['reading', 'cricket', 'music'],
  address: {
    street: 'xxxxxxx street1',
    city: 'xxxxxx city1',
    state: 'xxxx state1',
  },
  sayHello: function () {
    console.log (`hello...${this.name}`);
  },
};

console.log (Person.name);
console.log (Person.hobbies[1]);
console.log (Person.address.city);
Person.sayHello ();
