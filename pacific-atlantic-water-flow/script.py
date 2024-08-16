
from collections import deque
import pdb
import logging 
        
def pacific_atlantic_water_flow(heights):
    logging.basicConfig(level=logging.INFO)
    result = []
    y_coordinates = len(heights)
    x_coordinates = len(heights[0])
    logging.info("y_coordinates:{}, x_coordinates:{}".format(y_coordinates, x_coordinates))
    pacific_queue = deque([])
    atlantic_queue = deque([])

    # initialize queues on starting corner point
    for i in range(y_coordinates):
        for j in range(x_coordinates):
            if i == 0 or j == 0:
                pacific_queue.append([i,j])
            if (i == y_coordinates - 1) or (j == x_coordinates - 1):
                atlantic_queue.append([i,j])

    logging.info("Init Atlantic queue: {} \n Init Pacific queue: {}".format(atlantic_queue, pacific_queue))

    # out of bounds check
    def is_valid(x,y):
            return x >= 0 and y >= 0 and x < y_coordinates and y < x_coordinates
    

    def bfs(queue):
        directions = [[0,1], [0,-1], [1,0], [-1,0]]

        # visit only once
        visited_reachable = [[False]* x_coordinates for y_item in range(y_coordinates)]

        while len(queue):
             [x,y] = queue.popleft()

             # can be reached from one side, pacific or atlantic
             # depending on call from pacific or atlantic
             visited_reachable[x][y] = True

             for direction in directions:
                  next_x = x + direction[0]
                  next_y = y + direction[1]
                  next_move_valid =  is_valid(next_x,next_y)

                 # when out of bounds do not add items 
                  if not next_move_valid or visited_reachable[next_x][next_y]: 
                      continue
                  
                  # if reachable proceed with bfs traversal by adding items to queue 
                  if heights[next_x][next_y] >= heights[x][y]:
                    #    pdb.set_trace()
                       queue.append([next_x, next_y])

        return visited_reachable
    
    pacific_reachable = bfs(pacific_queue)
    atlantic_reachable = bfs(atlantic_queue)
    
    # pdb.set_trace()
    for x in range(y_coordinates):
         for y in range(x_coordinates):
            if pacific_reachable[x][y] and atlantic_reachable[x][y]:
                 result.append([x,y])
    
    return result



heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]

print(pacific_atlantic_water_flow(heights))
