// question => https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let res = 0;
  const len = s.length < 95 ? s.length : 100;
  for (let i = 0; i <= len; i++) {
    for (let k = i; k <= len; k++) {
      if (i !== k) {
        const setSize =
          getSize(s, i, k) === s.substring(i, k).length ? getSize(s, i, k) : 0;

        res = res > setSize ? res : setSize;
      }
    }
  }
  return res;
};

function getSize(s, i, k) {
  return new Set(s.substring(i, k).split("")).size;
}
