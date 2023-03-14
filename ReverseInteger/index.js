/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const isPositive = x > 0;

  if (!isPositive) {
    x = -1 * x;
  }

  const res = Number(x.toString().split("").reverse().join(""));

  return isPositive ? (res <= 2 ** 31 ? res : 0) : res <= 2 ** 31 ? -res : 0;
};
