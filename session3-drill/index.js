// js
// Input: [1,2,3]  function(num){return num === 2}
// Output: true

// Input: [1,5,3]  function(num){return num === 2}
// Output: false

// Input: [1,2,3]  function(num){return num % 2 === 0}
// Output: true

// Input: [1,5,3]  function(num){return num % 2 === 0}
// Output: false

function evaluateCallback(numberArray, callbackFunction) {
  // same as below:
  //   let result;
  //   for (const number of numberArray) {
  //     result = callbackFunction(number);
  //     if (result === true) {
  //       return true;
  //     }
  //   }
  //   return false;

  //  return numberArray.some(callbackFunction);
  return numberArray.some(function (num) {
    return num === 2;
  });
}
