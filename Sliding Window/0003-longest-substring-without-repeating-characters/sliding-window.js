/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Sliding Window
 * Time Complexity:  O(N) 
 * Space Complexity: O(N)
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  const set = new Set()
  let maxLength = 0
  let left = 0

  for (let right=0;right<s.length;right++) {
    while(set.has(s[right])) {
      set.delete(s[left])
      left++
    }
    set.add(s[right])
    maxLength = Math.max(maxLength, set.size)
  }

  return maxLength;
};
