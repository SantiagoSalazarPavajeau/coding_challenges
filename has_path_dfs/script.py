graph = {
    "a": ["b", "c"],
    "b": ["d"],
    "c": ["e"],
    "d": ["f"],
    "e": [],
    "f": []
}
 # only for acyclic graphs
def haspath(graph,src,dst):
    if src == dst: return True
    for neighbor in graph[src]:
        if haspath(graph, neighbor, dst) == True:
            return True
    return False

print(haspath(graph, "a", "f"))