# question => https://leetcode.com/problems/median-of-two-sorted-arrays



# solution
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        m = len(nums1)
        nums2 = nums1+nums2
        nums2.sort()
        print(nums2)
        n = len(nums2)
        if n % 2 != 0:
            return nums2[-1+(n+1)//2]
        else:
            return (nums2[(n-2)//2] + nums2[(n-2)//2 + 1])/2