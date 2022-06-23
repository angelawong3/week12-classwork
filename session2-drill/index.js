function applyCallBack(inputArray, callbackFunction) {
  //   return [];

  const result = inputArray.map((number) => {
    return callbackFunction(number);
  });

  return result;
}

module.exports = applyCallBack;
