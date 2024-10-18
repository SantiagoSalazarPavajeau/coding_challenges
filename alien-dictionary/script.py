from collections import defaultdict, deque


def alien_order(words):
    adj_list = defaultdict(set)
    in_degree = {char: 0 for word in words for char in word}
    
    # build graph (adjecency list)
    # count the characters with multiple dependencies on in degree
    for i in range(len(words) - 1):
        first, second = words[i], words[i+1]
        min_len = min(len(first), len(second))
        if first[:min_len] == second[:min_len] and len(first)> len(second):
            return ""
        for j in range(min_len):
            if first[j] != second[j]:
                if second[j] not in adj_list[first[j]]:
                    adj_list[first[j]].add(second[j])
                    in_degree[second[j]] += 1
                break
    print(in_degree)
    print(adj_list)

    # BFS topological order
    zero_queue = deque([char for char in in_degree if in_degree[char] == 0])
    topological_order = []

    while zero_queue:
        char = zero_queue.popleft()
        topological_order.append(char)
        for neighbor in adj_list[char]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                zero_queue.append(neighbor)
    if len(topological_order) == len(in_degree):
        return "".join(topological_order)
    else:
        return "" # cycles are invalid
    

# words are sorted in alien abc's
words = ["wrt", "wrf", "er", "ett", "rftt"]
print(alien_order(words))