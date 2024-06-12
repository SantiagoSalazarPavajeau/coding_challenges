import logging
from typing import List
import pdb

class Solution:

    """
    Max subarray sum: return integer of largest sum of continoums items in array
    """
    def maximum_subarray_sum(self, nums: List[int]) -> int:
        logging.basicConfig(level=logging.INFO)
        result = nums[0]
        current_sum = 0

        for item in nums:
            # if we have a negative sum we must discard it by setting it back to 0
            if current_sum < 0:
                current_sum = 0
            # sum the next items in list
            current_sum = current_sum + item
            # see if we have reached a new highest sum than before
            result = max(result, current_sum)
        
        logging.info("Result is : {}".format(result))
        return result


Solution().maximum_subarray_sum([-2,1,-3,4,-1,2,1,-5,4])
        