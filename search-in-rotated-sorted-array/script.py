import logging
from typing import List
import pdb

class Solution:

    """
    Search a rotated subarray: return index of target value
    """
    def search_rotated_sorted_array(self, nums: List[int], target: int) -> int:
        logging.basicConfig(level=logging.INFO)
        left = 0
        right = len(nums) -1
        while left <= right:
            # binary search by breaking array in half
            middle = (left + right) // 2

            # check if finally middle value is target
            if target == nums[middle]:
                result = middle
                logging.info("Result is : {}".format(result))
                return result

            # iteration over left pointer side
            # if left value is less than or equal than middle
            if nums[left] <= nums[middle]:
                # if target is greater than middle or less than left
                # if target is outside range of middle and left
                if target > nums[middle] or target < nums[left]:
                    # we move left pointer to right of middle
                    left = middle + 1
                else:
                    # we move left pointer to left of middle
                    left = middle - 1
            
            # iteration over right pointer side
            # middle value is lower than left
            else:
                # target is outside range between middle pointer and right pointer
                if target < nums[middle] or target > nums[right]:
                    # right pointer goes to left side
                    right = middle - 1
                else:
                    # left pointer goes to right side
                    left = middle + 1

        
        return -1


Solution().search_rotated_sorted_array([4,5,6,7,0,1,2], 7)