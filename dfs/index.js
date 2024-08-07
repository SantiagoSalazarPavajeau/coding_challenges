

const dfsPrintRecursive = (graph,source) => {
    console.log(source)
    for(let neighbor of graph[source]){
        dfsPrintRecursive(graph, neighbor)
    }
}
const dfsPrintIterative = (graph, source) => {
    // only use push and pop
    const stack = [source];

    while(stack.length > 0){
        const current = stack.pop()
        console.log(current)

        for (let neighbor of graph[current]){
            stack.push(neighbor)
        }
    }
}


const graph = {
    a: ["b", "c"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: []
}

dfsPrintIterative(graph, "a")

dfsPrintRecursive(graph,"a")
