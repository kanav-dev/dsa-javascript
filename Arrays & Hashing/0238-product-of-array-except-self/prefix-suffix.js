/**
 * https://leetcode.com/problems/product-of-array-except-self
 * Prefix Suffix
 * Time Complexity:  O(N) 
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function(nums) {
  const res = [];
  let prefix = 1;
  let suffix = 1;

  for(let i=0; i<nums.length; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }

  for(let i=nums.length-1; i>=0; i--) {
    res[i] *= suffix;
    suffix *= nums[i];
  }

  return res;
};
