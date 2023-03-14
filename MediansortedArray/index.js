/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const mergeArray = [...nums1, ...nums2].sort((a, b) => a - b);
  if (mergeArray.length % 2 === 0) {
    let specificPlace = Math.floor(mergeArray.length / 2);
    let median =
      (mergeArray[specificPlace - 1] + mergeArray[specificPlace]) / 2;
    return median;
  } else {
    let median = Math.floor(mergeArray.length / 2);
    return mergeArray[median];
  }
};
