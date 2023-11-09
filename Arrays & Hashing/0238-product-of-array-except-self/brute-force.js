/**
 * https://leetcode.com/problems/product-of-array-except-self
 * Brute Force
 * Time Complexity:  O(N^2) 
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function(nums) {
  const res = [];
  
  for(let i=0; i<nums.length; i++) {
    let prod=1;
    for(let j=0; j<nums.length; j++) {
      if(i !== j) prod *= nums[j];
    }
    res.push(prod);
  }
  
  return res;
};
