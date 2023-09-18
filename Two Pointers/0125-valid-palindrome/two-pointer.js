/**
 * https://leetcode.com/problems/valid-palindrome/
 * Two Pointer
 * Time Complexity:  O(N) 
 * Space Complexity: O(1)
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
 s =  s.toLowerCase().replace(/[^a-z0-9]/g,'');
 let left = 0;
 let right = str.length-1;

 while(left<=right) {
   if(str[left] !== str[right]) return false;
   left++;
   right--;
 }

 return true;
};
