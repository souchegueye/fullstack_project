function leapYear (year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  } else {
    return false;
  }
}
let check = leapYear (1989);
console.log (check);

// arrow function
