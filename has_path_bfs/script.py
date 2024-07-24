from collections import deque

graph = {
    "a": ["b", "c"],
    "b": ["d"],
    "c": ["e"],
    "d": ["f"],
    "e": [],
    "f": []
}


def hasPath(graph, src, dst):
    queue = deque(src)
    while len(queue) >0:
        current = queue.popleft()
        if current == dst: return True
        
        for neighbor in graph[current]:
            queue.append(neighbor)
    return False

print(hasPath(graph, "a", "f"))

