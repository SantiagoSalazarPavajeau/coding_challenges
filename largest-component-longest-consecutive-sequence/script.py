sequence = [100,4,200,1,3,2]

def longest_consecutive_sequence(sequence):
    the_set = set(sequence)
    result = 0

    for n in sequence:
        if n-1 not in the_set:
            current_length = 0
            while n + current_length in the_set:
                current_length += 1
            result = max(current_length, result)
    return result

print(longest_consecutive_sequence(sequence))

graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
}

def largest_component(graph):
    result = 0
    longest = 0
    visited = set()
    for node in graph:
        size = find_size(graph, node, visited)
        longest = max(size, longest)

def find_size(graph,node, visited):
    if node in visited: return 0
    visited.add(node)
    size = 1 # start from 1 because we are already in 1st node
    for neighbor in graph[node]:
        size += find_size(graph, neighbor, visited)
    return size


largest_component(graph)