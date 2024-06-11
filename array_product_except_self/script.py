import logging
from typing import List
import pdb

class Solution:

    """
    Contains duplicate: return true or false if array contains duplicate values
    """
    def array_product_except_self(self, nums: List[int]) -> bool:
        logging.basicConfig(level=logging.INFO)
        result = [1] * (len(nums))
        # pdb.set_trace()
        prefix = 1 
        for i in range(len(nums)):
            result[i] = prefix
            prefix = prefix * nums[i]
        postfix = 1
        for i in range(len(nums) -1, -1, -1):
            result[i] = result[i] * postfix
            postfix = postfix * nums[i]

        logging.info("Result is : {}".format(result))
        return result
    

Solution().array_product_except_self([1,2,3,4])