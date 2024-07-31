import pdb

grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
]

def minimum_island(grid):
    visited = set()
    min_island = float('inf')
    for r in range(len(grid)):
        for c in range(len(grid[0])):
            size = dfs(grid, r, c, visited)
            if size > 0 and size < min_island:
                min_island = size
    
    return min_island
    

def dfs(grid, r, c, visited):
    rowInbounds = (0 <= r) and (r < len(grid))
    colInbounds = (0 <= c) and (c < len(grid[0]))
    if (rowInbounds== False ) or (colInbounds == False): return False

    if grid[r][c] == "W": return False

    pos = str(r) + "," + str(c)

    if pos in visited: return False
    visited.add(pos)

    size = 1
    size +=dfs(grid, r-1, c, visited)
    size +=dfs(grid, r+1, c, visited)
    size +=dfs(grid, r, c-1, visited)
    size +=dfs(grid, r, c+1, visited)

    return size

print(minimum_island(grid))
