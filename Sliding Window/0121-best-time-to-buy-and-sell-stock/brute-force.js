/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Brute Force
 * Time Complexity:  O(N^2) 
 * Space Complexity: O(1)
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
  let maxPr = 0;
  
  for(let i=0;i<prices.length;i++) {
    for(let j=i+1;j<prices.length;j++) {
      maxPr = Math.max(maxPr, prices[j]-prices[i]);
    }
  }
  
  return maxPr;
};
