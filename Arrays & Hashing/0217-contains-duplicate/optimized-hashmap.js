/**
 * https://leetcode.com/problems/contains-duplicate/
 * Hash Map
 * Time Complexity:  O(N) 
 * Space Complexity: O(N)
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const obj = {}
  for(const item of nums) {
    if(item in obj) return true;
    obj[item] = item;
  }
  return false;
};
