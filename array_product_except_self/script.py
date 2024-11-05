import logging
from typing import List
import pdb

class Solution:

    """
    Product of all other items replace current
    """
    def array_product_except_self(self, nums: List[int]) -> bool:
        logging.basicConfig(level=logging.INFO)

        result = [1] * (len(nums))
        # pdb.set_trace()
        left_to_right = 1 
        # calculates the product excluding the first element
        for i in range(len(nums)):
            #dynamic programming
            result[i] = left_to_right
            left_to_right = left_to_right * nums[i]

        right_to_left = 1
        #calculated the product excluding the last element
        for i in range(len(nums) -1, -1, -1):
            # dynamic programming
            result[i] = result[i] * right_to_left
            right_to_left = right_to_left * nums[i]
        # result = [nums[3] * nums[2] * nums[1], nums[0] * nums[3] * nums[2], nums[0] * nums[1] * nums[3], nums[0] * nums[1] * nums[2]], suffix = nums[3] * nums[2] * nums[1] * nums[0]
        logging.info("Result is : {}".format(result))
        return result
    

Solution().array_product_except_self([1,2,3,4])