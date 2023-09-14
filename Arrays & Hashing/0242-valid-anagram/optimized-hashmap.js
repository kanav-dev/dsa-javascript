/**
 * https://leetcode.com/problems/valid-anagram/
 * Hash Map
 * Time Complexity:  O(N) 
 * Space Complexity: O(N)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
  if(s.length !== t.length) return false;

  const obj = {};
  for(const item of s){
    obj[item] = (obj[item] || 0) + 1;
  }
  
  for(const item of t){
    if(!obj[item]) return false;
    obj[item]--;
  }
  
  return true;
};
