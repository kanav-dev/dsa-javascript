/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * Brute Force - Linear Search
 * Time Complexity:  O(N^2) 
 * Space Complexity: O(1)
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(numbers, target) {
  for(i=0; i<numbers.length; i++){
    for(j=i+1;j<numbers.length;j++) {
      if(numbers[i] + numbers[j] === target) {
        return [i+1,j+1]
      }
    }
  }
};
