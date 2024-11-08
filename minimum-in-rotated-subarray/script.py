import logging
from typing import List
import pdb

class Solution:

    """
    Find minimum in rotated subarray: return integer of largest sum of continoums items in array
    """
    def minimum_in_rotated_subarray(self, nums: List[int]) -> int:
        logging.basicConfig(level=logging.INFO)
        result = nums[0]
        left = 0
        right = len(nums) - 1
        while left < right:
            # no remainder divide in half
            mid = (left + right) // 2

            if nums[mid] > nums[right]:
                #smallest value is in right
                left = mid+1
            else:
                right = mid

        logging.info("Result is : {}".format(result))
        result = nums[left]
        return result


Solution().minimum_in_rotated_subarray([3,4,5,1,2])