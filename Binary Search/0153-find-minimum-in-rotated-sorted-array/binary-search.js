/**
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * Binary Search
 * Time Complexity:  O(LogN) 
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function(nums) {
  let left = 0
  let right = nums.length-1

  while(left<=right) {
    mid = Math.floor((left+right)/2)
    if(nums[left] <= nums[right]) return nums[left];
    if(nums[mid]>=nums[left]) left = mid+1
    else right = mid
  }
};
