class Node:
    def __init__(self, val = 0 , neighbors = None):
        self.val = val
        self.neighbors = neighbors

def clone_graph(node: 'Node') -> 'Node':
    if not node: return None

    visited = {}
    def dfs(node):
        # skip visited nodes
        if node in visited: return visited[node]

        #initialize clone
        clone = Node(node.val, [])

        visited[node] = clone

        if node.neighbors:
            for neighbor in node.neighbors:
                clone.neighbors.append(dfs(neighbor))
        
        return clone
    
    return dfs(node)
node = Node()
node.val = 1
neighbor1 = Node(val=2)
neighbor2 = Node(val=3)
node.neighbors = [neighbor1, neighbor2]
# adjecency_list = [[2,4],[1,3],[2,4],[1,3]]
adjecency_list = [1,2,3]
cloned_graph = clone_graph(node)
print(cloned_graph.neighbors[0].val)