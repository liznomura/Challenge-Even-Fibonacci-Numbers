/*jshint esversion: 6 */
/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */


 function _sumFibs( maxFibValue ) {

  var sum = 0;

  function isFib(n) {
    let plusFour = 5 * Math.pow(n, 2) + 4;
    let minusFour = 5 * Math.pow(n, 2) - 4;
    if (Number.isInteger(Math.sqrt(plusFour)) === true || Number.isInteger(Math.sqrt(minusFour)) === true) {
      return true;
    } else {
      return false;
    }
  }

  for (var i = 0; i <= maxFibValue; i++) {
    if (i % 2 === 0 && isFib(i) === true) {
      sum += i;
    }
  }
  return sum;
}


// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input


  //do your work here

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
 module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};