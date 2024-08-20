from collections import deque

edges= [["w","x"],["x","y"],["z","y"],["z","v"],["w","v"]]
nodeA= "w"
nodeB= "z"
def shortest_path_bfs(edges, nodeA, nodeB):
    graph = build_graph(edges)
    visited = set(nodeA)
    queue = deque([[nodeA, 0]])
    # queue.append()
    while len(queue) >0:
        [node, distance] = queue.popleft()

        if node == nodeB: return distance

        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append([neighbor, distance + 1])
    
    return -1

def build_graph(edges):
    graph = {}

    for edge in edges:
        [a,b] = edge
        if a not in graph: graph[a] = []
        if b not in graph: graph[b] = []
        graph[a].append(b)
        graph[b].append(a)
    return graph

print(shortest_path_bfs(edges,nodeA,nodeB))



matrix = [["a","b","c"],["#","d","#"],["e","f","g"]]
def shortest_path_bfs_matrix(matrix):
    rows = len(matrix)
    columns =  len(matrix[0])
    move_count = 0
    nodes_in_layer = 1
    nodes_next_layer = 0
    end= False
    visited = [[] for item in rows]
    dir_row = [-1,1, 0, 0]
    dir_column =  [0,0,1,-1]
    row_queue = deque()
    column_queue = deque()
    
