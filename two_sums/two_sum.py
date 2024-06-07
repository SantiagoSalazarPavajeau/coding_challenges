import logging
from typing import List

class Solution:

    """
    Two Sum: Finds the indexes of the two values that sum to target
    """
    def two_sum(self, nums: List[int], target: int) -> List[int]:
        # verification object
        # maps teach value in the list to the index
        logging.basicConfig(level=logging.INFO)
        verificator = {}
        
        for index, number  in enumerate(nums):
            # difference between target and current number
            difference = target - number

            # if the difference exists in the verification map
            # we have found out indexes the current iteration and the one mapped in out verificator
            if difference in verificator:
                logging.info("The indexes of the two values that sum to target are: {}".format([verificator[difference], index]))
                return [verificator[difference], index]
            else: # otherwise we continue mapping current value in list of numbers to its index
                verificator[number] = index

Solution().two_sum( [2,7,11,15], 9)
