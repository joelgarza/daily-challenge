function checkleapYear(num) {
  if (num % 4 === 0 ) {
    return true;
  } else if (num % 100 !== 0 && num % 400 === 0) {
    return 'leap year';
  } else {
    return 'it's not a leap year';
  }




}
var year = prompt('Give a year.');
console.log(leapYear(year));
