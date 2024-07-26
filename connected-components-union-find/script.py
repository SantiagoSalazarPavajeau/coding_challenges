import pdb

n=5
edges= [[0,1],[1,2],[3,4]]



def union_find(n, edges):
    ids = []
    for i in range(n):
        ids.append(i)

    for edge in edges:
        union(edge[0],edge[1],ids)
    
    the_set = set()
    
    for i in range(n):
        parent = find(i, ids)
        the_set.add(parent)
    
    return len(the_set)

def union(edge1, edge2, ids):
    parent1 = find(edge1,ids)
    parent2 = find(edge2,ids)
    ids[parent1] = parent2

def find(edge, ids):
    if ids[edge] != edge:
        ids[edge] = find(ids[edge], ids)
    return ids[edge]

print(union_find(n,edges))
