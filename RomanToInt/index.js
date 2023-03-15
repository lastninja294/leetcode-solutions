/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let romNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (romNum[s[i]] < romNum[s[i + 1]]) sum -= romNum[s[i]];
    else sum += romNum[s[i]];
  }

  return sum;
};
