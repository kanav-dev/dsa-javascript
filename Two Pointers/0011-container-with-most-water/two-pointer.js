/**
 * https://leetcode.com/problems/container-with-most-water/
 * Two Pointer
 * Time Complexity:  O(N) 
 * Space Complexity: O(1)
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {
  let left = 0
  let right = height.length-1
  let maxArea = 0

  while(left<right) {
    currArea = Math.min(height[left], height[right]) * (right-left)
    maxArea = Math.max(maxArea, currArea)
    if(height[left]<height[right]) left++
    else right--
  }

  return maxArea;
};
