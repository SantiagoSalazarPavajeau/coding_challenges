import logging
from typing import List
import pdb

class Solution:

    """
    Max subarray sum: return integer of largest sum of continoums items in array
    """
    def maximum_subarray_product(self, nums: List[int]) -> int:
        logging.basicConfig(level=logging.INFO)
        result = max(nums)
        # have to store both max and min
        # because negative times negative numbers can become positive
        max_and_min = [1,1]

        for item in nums:
            # need the old current_max to find the lowest minimum
            # before overriding it on the min max array
            current_max = max_and_min[1] * item
            # need to compare 3 values
            # 1. new maximum -> old max times current item
            # 2. new minimum -> old min times current item
            # 3. current item by itself

            max_and_min[1] = max(item * max_and_min[1], item * max_and_min[0], item)
            max_and_min[0] = min(current_max, item * max_and_min[0], item)

            # compare highest initial value from nums array
            # vs new maximum from subarray product
            result = max(result, max_and_min[1])

        logging.info("Result is : {}".format(result))
        return result


Solution().maximum_subarray_sum([2,3,-2,4])