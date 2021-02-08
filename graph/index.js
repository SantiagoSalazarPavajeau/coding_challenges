// connects nodes through edges
// directed 
// undirected
// weighted
// unweighted

//adjecency matrix: 
// more space
// slower with more edges
// faster for specific edge search
//  a b c d
//a 0 1 0 1
//b 1 0 1 0
//c 0 1 0 0
//d 1 0 1 1


//adjacency list
// less space
// faster with more edges
// slower for specific edge search
//  {
//  'a': ['b','c'],
//  'b': ['a','c'],
//  'c': ['a','b'],
//   }
// less space is important in real life

class Graph{
    constructor(){
        this.adjList = {}
    }

    addNode(val){
        if(this.adjList[val]){
            return `Node ${val} already exists`
        }else{
            this.adjList[val] = []
        }
    }

    removeNode(val){
        if(this.adjList[val]){
            this.adjList[val] = []

            delete this.adjList[val]

            for(let key in this.adjList){
                this.adjList[key] = this.adjList[key].filter(node => node !== val)
            }
        }
        return this.adjList
    }
    
    addEdge(node1,node2){
        if(this.adjList[node1]){ 
            this.adjList[node1].push(node2)
        } 
        else {
            this.adjList[node1] = []
            this.adjList[node1].push(node2)
        }

        if(this.adjList[node2]) {
            this.adjList[node2].push(node1)
        } else{
            this.adjList[node2] = []
            this.adjList[node2].push(node1)
        }
    }

    removeEdge(node1, node2){
        this.adjList[node1] = this.adjList[node1].filter( node => node !== node2)
        this.adjList[node2] = this.adjList[node2].filter(node => node !== node1 )
        return this.adjList
    }

    
}

let graph = new Graph()
// graph.addNode("Santiago")
// graph.adjList["Santiago"].push("Javi")
graph.addEdge("santi", "javi")
graph.addEdge("mati", "javi")
graph.addEdge("mati", "santi")

// console.log(graph.addNode("santi"))
console.log(graph.adjList)
// console.log(graph.removeEdge("santi", "javi"))
console.log(graph.removeNode("mati"))