import pdb

n=5
edges= [[0,1],[0,2],[0,3],[1,4]]
n1=5
edges1= [[0,1],[1,2],[2,3],[1,3],[1,4]]

def graph_valid_tree(n, edges):
    adjecency_list = {}

    for i in range(n):
        adjecency_list[i] = []

    for [a,b] in edges:
        adjecency_list[a].append(b)
        adjecency_list[b].append(a)

    visited = set()

    def check_cycle(current, parent):
        visited.add(current)
        neighbors =  adjecency_list[current]

        if len(neighbors):
            for neighbor in neighbors:
                if neighbor in visited:
                    if neighbor is not parent: return True
                else:
                    if check_cycle(neighbor, current): return True
        return False
    
    if check_cycle(0, -1): return False

    for i in range(n):
        if i not in visited:
            return False

    return True

print(graph_valid_tree(n, edges))

print(graph_valid_tree(n1,edges1))