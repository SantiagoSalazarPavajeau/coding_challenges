import logging
from typing import List
import pdb
import heapq

class Solution:

    """
        :type points: List[List[int]]
        :rtype: int
    """
    def minCostConnectPoints(self, points):
        logging.basicConfig(level=logging.INFO)

        length = len(points) 
        total_cost = 0
        visited = set()
        min_heap = [(0,0)]

        while len(visited) < length:
            min_cost, i = heapq.heappop(min_heap)
            if i in visited:
                continue
            visited.add(i)
            total_cost += min_cost
            xi, yi = points[i]

            for j in range(length):
                if j not in visited:
                    xj, yj = points[j]
                    each_cost = abs(xi-xj) + abs(yi-yj)
                    heapq.heappush(min_heap, (each_cost, j))

        logging.info("Result is : {}".format(total_cost))
        return total_cost

Solution().minCostConnectPoints([[0,0],[2,2],[3,10],[5,2],[7,0]])