class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
        console.log(this.adjacencyList);       
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    display(){
        if(this.adjacencyList){
            for(let vertex in this.adjacencyList){
                console.log(vertex+" - > "+[...this.adjacencyList[vertex]]);               
            }
        }
    }
    //recursive
    dfs(startVertex,visited = new Set()){
        visited.add(startVertex)
        console.log(startVertex);
        for(let neighbor of this.adjacencyList[startVertex]){
            if(!visited.has(neighbor)){
                this.dfs(neighbor,visited)
            }
        }
    }
    //iterative---avoids stack overflow
    dfsIterative(startVertex){
        const stack = [startVertex]
        const visited = new Set()
        while(stack.length){
            const current = stack.pop()
            if(!visited.has(current)){
                visited.add(current)
                console.log(current);
                for(let neighbor of [...this.adjacencyList[current]].reverse()){
                    if(!visited.has(neighbor)){
                        stack.push(neighbor)
                    }
                }                
            }           
        }
    }
    bfs(startVertex){
        if(!this.adjacencyList[startVertex]){
            return 
        }
        const queue = [startVertex]
        const visited = new Set()
        visited.add(startVertex)
        while(queue.length>0){
            const current = queue.shift()
            console.log(current);            
            for(const neighbor of this.adjacencyList[current]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor)   
                    queue.push(neighbor)               
                }
            }
        }
    }
}
const graph = new Graph()
graph.addEdge('A','B')
graph.addEdge('A','C')
graph.addEdge('C','F')
graph.addEdge('B','D')
graph.addEdge('B','E')
graph.display()
console.log("Graph in DFS Traversal");
graph.dfs('A')
console.log("Graph in DFS Traversal-Iterative");
graph.dfsIterative('A')
console.log("Graph in BFS Traversal");
graph.bfs('A')