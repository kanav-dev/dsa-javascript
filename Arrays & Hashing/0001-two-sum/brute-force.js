/**
 * https://leetcode.com/problems/two-sum/
 * Brute Force - Linear Search
 * Time Complexity:  O(N^2) 
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  for(i=0; i<nums.length; i++){
    for(j=i+1;j<nums.length;j++) {
      if(nums[i] + nums[j] === target) {
        return [i,j]
      }
    }
  }
};
