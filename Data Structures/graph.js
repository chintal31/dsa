class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  //recursive solution
  depthFirstSearchR(start) {
    if (!this.adjacencyList[start]) return null;
    const al = this.adjacencyList;
    let visited = [];
    visited.push(start);
    function dfs(node) {
      node &&
        al[node] &&
        al[node].forEach((v) => {
          if (!visited.includes(v)) {
            visited.push(v);
            dfs(v);
          }
        });
    }
    dfs(start);
    return visited;
  }

  //iterative solution
  depthFirstSearchI(start) {
    if (!this.adjacencyList[start]) return null;
    let stack = [];
    let visited = [];
    stack.push(start);
    while (stack.length !== 0) {
      let vertex = stack.shift();
      if (!visited.includes(vertex)) {
        visited.push(vertex);
        for (let neighbour of this.adjacencyList[vertex]) {
          stack.push(neighbour);
        }
      }
    }
    return visited;
  }

  //bfs
  breadthFirstSearch(start) {
    let visited = [];
    if (!start) return [];
    visited.push(start);
    function bfs(node) {
      if (!visited.includes(node)) {
        visited.push(node);
      }
    }
    Object.keys(this.adjacencyList).forEach((v) => {
      this.adjacencyList[v].forEach((vv) => {
        bfs(vv);
      });
    });
    return visited;
  }
}
