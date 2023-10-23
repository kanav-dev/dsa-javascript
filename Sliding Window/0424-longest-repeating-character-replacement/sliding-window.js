/**
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 * Sliding Window
 * Time Complexity:  O(N) 
 * Space Complexity: O(1)
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var characterReplacement = function(s, k) {
  const charCount = {};
  let left = 0;
  let maxLength = 0;
  let maxFreq = 0;

  for (let right=0; right<s.length; right++) {
    charCount[s[right]] = (charCount[s[right]] || 0) + 1
    let windowLength = right - left + 1
    maxFreq =  Math.max(maxFreq, charCount[s[right]])
    let replaceCount = windowLength - maxFreq;

    if (replaceCount<=k){
      maxLength = Math.max(maxLength, windowLength)
      continue;
    }

    charCount[s[left]]--
    left++;
  }

  return maxLength; 
};
