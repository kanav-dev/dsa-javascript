/**
 * https://leetcode.com/problems/3sum/
 * Two Pointer
 * Time Complexity:  O(N^2) 
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
  const result = [];
  nums.sort((a,b) => a-b);

  for (let i=0;i<nums.length;i++) {
    if(nums[i] === nums[i-1]) continue;
    let target = 0 - nums[i]
    let left = i+1
    let right = nums.length-1

    while(left < right) {
      if(left>i+1 && nums[left] === nums[left-1]) {
        left++
        continue;
      }
      if(nums[left] + nums[right] === target) {
        result.push([nums[i], nums[left], nums[right]])
        left++
        right--
      }
      else if(nums[left] + nums[right] < target) left++
      else right--
    }
    
  }

  return result;
};
