/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * Two Pointer
 * Time Complexity:  O(N) 
 * Space Complexity: O(1)
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length-1;
  let sum;

  while (left<right) {
    sum = numbers[left] + numbers[right];
    if (sum === target) return [left+1, right+1];
    if (sum < target) left++;
    else right--;
  }
};
