function Person (first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Person.prototype.nationality = 'English';

const myFavoritePlayer = new Person ('Karim', 'Benzema', 34, 'brown');
const myTeam = new Person ('Real', 'Madrid', 121, 'white');

console.log ();
