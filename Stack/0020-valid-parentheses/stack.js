/**
 * https://leetcode.com/problems/valid-parentheses/
 * Stack
 * Time Complexity:  O(N) 
 * Space Complexity: O(N)
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
  const bracketMap = {
    ')' : '(',
    '}' : '{',
    ']' : '[',
  }  
  const stack = []

  for(const item of s) {
    if(!(item in bracketMap)) stack.push(item)
    else if(stack[stack.length-1] === bracketMap[item]) stack.pop()
    else return false;
  }

  return stack.length === 0;
};
