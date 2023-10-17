/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Sliding Window
 * Time Complexity:  O(N) 
 * Space Complexity: O(1)
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
  let maxPr = 0;
  let left = 0;
  let right = 1;

  while (right<prices.length) {
    if (prices[left] >= prices[right]) {
      left = right;
      right++;
      continue;
    }
    const profit = prices[right] - prices[left];
    maxPr = Math.max(maxPr, profit);
    right++;
  }
  
  return maxPr;
};
