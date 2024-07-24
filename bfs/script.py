from collections import deque
graph = {
    "a": ["c", "b"],
    "b": ["d"],
    "c": ["e"],
    "d": ["f"],
    "e": [],
    "f": []
}

def breadth_first_search(graph, source):
    queue = deque(source)
    while len(queue) >0 :
        current = queue.popleft()
        print(current)
        for neighbor in graph[current]:
            queue.append(neighbor)

breadth_first_search(graph,"a")