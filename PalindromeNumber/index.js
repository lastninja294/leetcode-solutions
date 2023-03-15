/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // solution with built in functions
  // return x.toString() === x.toString().split("").reverse().join("");

  // logical solution
  x = x.toString();
  const len = x.length;
  for (let i = 0; i <= len / 2; i++) {
    if (!(x[i] === x[len - i - 1])) return false;
  }
  return true;
};
