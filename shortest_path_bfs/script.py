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
