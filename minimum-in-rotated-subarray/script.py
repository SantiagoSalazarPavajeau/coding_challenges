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
        right = len(nums) -1
        while left <= right:
            # we try to find the smallest number so far
            # between the number at 0 index, the number in current left pointer and the number in right pointer.
            # we will always compare the lowest number we have found to the current number we are looking at
            if nums[left] < nums[right]:
                result = min(result, nums[left])
                break
            
            # binary search by breaking array in half
            middle = (left + right) // 2

            # now we have a new number at middle 
            # so we can also see if that one is the lowest we have seen
            result = min(result, nums[middle])

            # the binary search finds reassigns left and right pointer to new middle
            # based on which side has a lower number
            # this works because array is sorted
            if nums[middle] >= nums[left]:
                left = middle + 1
            else:
                right = middle - 1

        logging.info("Result is : {}".format(result))
        return result


Solution().minimum_in_rotated_subarray([3,4,5,1,2])