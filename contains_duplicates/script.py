import logging
from typing import List

class Solution:

    """
    Contains duplicate: return true or false if array contains duplicate values
    """
    def contains_duplicate(self, nums: List[int]) -> bool:
        logging.basicConfig(level=logging.INFO)
        
        unique_numbers_set = set()

        for n in nums:
            if n in unique_numbers_set:
                return True
            else:
                unique_numbers_set.add(n)

        return False
