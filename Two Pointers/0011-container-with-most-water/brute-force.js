/**
 * https://leetcode.com/problems/container-with-most-water/
 * Brute Force
 * Time Complexity:  O(N^2) 
 * Space Complexity: O(1)
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {
  let maxArea = 0;

  for(let i=0;i<height.length;i++) {
    for(let j=i+1;j<height.length;j++) {
      let currArea = (Math.min(height[i], height[j])) * (j-i);
      maxArea = Math.max(currArea, maxArea);
    }
  }

  return maxArea;
};
