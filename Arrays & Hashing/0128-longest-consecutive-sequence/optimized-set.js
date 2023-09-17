/**
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * Set
 * Time Complexity:  O(N) 
 * Space Complexity: O(N)
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function(nums) {
  const set = new Set(nums)
  let longestLength = 0

  for (const num of nums) {
    if(set.has(num-1)) continue
    let currentLength = 1

    while (set.has(num+currentLength)) {
      currentLength++
    }

    longestLength = Math.max(currentLength, longestLength)
  }

  return longestLength;
};
