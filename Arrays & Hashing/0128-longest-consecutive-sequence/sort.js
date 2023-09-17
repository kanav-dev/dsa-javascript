/**
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * Sort
 * Time Complexity:  O(N * LOGN) 
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function(nums) {
  if (!nums.length) return 0;

  let currentLength = 1;
  let longestLength = 1;

  const sortedNums = [...nums].sort((a,b) => a-b);

  for (let i=0; i<sortedNums.length; i++) {
    if(sortedNums[i+1] === sortedNums[i]) continue;

    if(sortedNums[i+1]-sortedNums[i] === 1) {
      currentLength++;
      continue;
    }

    longestLength = Math.max(currentLength, longestLength);
    currentLength = 1;
  }

  return longestLength;
};
