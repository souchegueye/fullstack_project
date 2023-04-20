function isArmStrongNumber () {
  //Convert the number to a string to get the number of digits

  const numStr = num.toString ();
  const numDigits = numStr.length;

  let sum = 0;
  for (let i = 0; i < numDigits; i++) {
    const digit = parseInt (numStr[i]);
    sum += Math.pow (digit, numDigits);
  }

  return sum == num;
}

console.log (isArmStrongNumber (153)); //true
console.log (isArmStrongNumber (370)); //true
console.log (isArmStrongNumber (9474)); //true
console.log (isArmStrongNumber (9475)); //false
