import pdb

grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
]

def number_of_islands(grid):
    visited = set()
    count = 0
    for r in range(len(grid)):
        for c in range(len(grid[0])):
            if dfs(grid, r, c, visited) is True:
                count += 1
    
    return count
    

def dfs(grid, r, c, visited):
    rowInbounds = (0 <= r) and (r < len(grid))
    colInbounds = (0 <= c) and (c < len(grid[0]))
    if (rowInbounds== False ) or (colInbounds == False): return False

    if grid[r][c] == "W": return False

    pos = str(r) + "," + str(c)

    if pos in visited: return False
    visited.add(pos)

    dfs(grid, r-1, c, visited)
    dfs(grid, r+1, c, visited)
    dfs(grid, r, c-1, visited)
    dfs(grid, r, c+1, visited)

    return True

print(number_of_islands(grid))
