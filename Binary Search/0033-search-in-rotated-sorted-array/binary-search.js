/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * Binary Search
 * Time Complexity:  O(LogN) 
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
  let left = 0
  let right = nums.length-1

  while(left<=right) {
    const mid = Math.floor((left+right)/2)
    if (target === nums[mid]) return mid;

    if (nums[mid]>=nums[left]) {
      if (target < nums[mid] && target >= nums[left]) right = mid-1
      else left = mid+1
    }
    else {
      if (target > nums[mid] && target <= nums[right]) left = mid+1
      else right = mid-1
    }
  }

  return -1;
};
