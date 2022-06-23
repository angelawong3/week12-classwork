// js
// Ex:
// Input: [1,2,3]  function(num){return num * 2*}
// Output: [2,4,6]

// Input: [1,2,3]  function(num){return num + 1}
// Output: [2,3,4]

// Input: [1,2,3] function(num) {return num /2}
// Output: [.5, 1. 1.5]

// Input: [1,2,3] function(num) {return num - 2}
// Output: [-1, 0, 1]

const applyCallBack = require("./index");

describe("applyCallBack", () => {
  test("It shd return [2,4,6] when supply with * function", () => {
    const multiFunc = function (num) {
      return num * 2;
    };
    const result = applyCallBack([1, 2, 3], multiFunc);

    expect(result).toEqual([2, 4, 6]);
  });
});
