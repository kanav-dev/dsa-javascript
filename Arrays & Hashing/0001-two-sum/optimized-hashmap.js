/**
 * https://leetcode.com/problems/two-sum/
 * Hash Map
 * Time Complexity:  O(N) 
 * Space Complexity: O(N)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  const obj = {}
  for(let i=0;i<nums.length;i++) {
	  const comp = target - nums[i];
	  if(comp in obj) return [i,obj[comp]];
	  obj[nums[i]] = i;
  }
};
