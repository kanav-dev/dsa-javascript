/**
 * https://leetcode.com/problems/valid-anagram/
 * Sort
 * Time Complexity:  O(N * LOGN) 
 * Space Complexity: O(1)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
};
