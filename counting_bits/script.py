import logging
from typing import List
import pdb

class Solution:

    """
    Count bits on integers
    """
    def counting_bits(self, n: int) -> List[int]:
        logging.basicConfig(level=logging.INFO)

        dp = [0] * (n+1)
        offset = 1

        for i in range(1, n +1):
            if offset*2 ==i:
                offset = i

            dp[i] = 1 + dp[i-offset]
        print(dp)
        return dp

Solution().counting_bits(2)