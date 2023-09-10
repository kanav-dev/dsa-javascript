/**
 * https://leetcode.com/problems/contains-duplicate/
 * Brute Force - Linear Search
 * Time Complexity:  O(N^2) 
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
  for(let i=0;i<nums.length;i++) {
    for(let j=i+1;j<nums.length;j++) {
      if(nums[i] === nums[j]) return true;
    }
  }
  return false;
};
