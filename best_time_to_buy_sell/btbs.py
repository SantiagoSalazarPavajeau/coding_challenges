import logging 
from typing import List

class Solution:
    def maximum_profit(self, prices: List[int]) -> int:
        logging.basicConfig(level=logging.INFO)
        # two pointers buying (left) -> index of 0 and selling (right) -> index of 1
        buy, sell = 0 , 1
        maximum_profit = 0

        #iterate by reaching the end length of the prices list with the selling right pointer 
        while sell < len(prices):
            # if buying price is less than selling price its a profitable operation
            if prices[buy] < prices[sell]:
                profit = prices[sell] - prices[buy]
                maximum_profit =  max(maximum_profit, profit)
            else: 
                # if the selling price is lower than the buying price we have found a new low 
                #which is the best new buying point
                buy = sell
            # advance iteration
            sell+= 1
        logging.info("The maximum profit for is: ${}".format(maximum_profit))
        return maximum_profit
            
Solution().maximum_profit([7,1,5,3,6,4])