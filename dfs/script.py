

def dfsPrintIterative(graph, source):
    stack = []
    stack.append(source)

    while(len(stack) > 0):
        current = stack.pop()
        print(current)
        for neighbor in graph[current]:
            stack.append(neighbor)

dfsPrintIterative(graph, "a")

def dfsPrintRecursive(graph, source):
    print(source)
    for neighbor in graph[source]:
        dfsPrintRecursive(graph, neighbor)

dfsPrintRecursive(graph, "a")