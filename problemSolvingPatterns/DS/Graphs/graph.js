class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    /**
     * Write a method called addVertex, which accepts a name of a vertex
     * it should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
     *
     */
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    /**
     * This function should accept two vertices, we'll call them vertex 1 and vertex 2
     * The function should reassign the key of vertex 1 to be an array that does not contain vertex2
     * The function should reassign the key of vertex2 to be an array that does not contain vertex 1
     */
    let index1 = this.adjacencyList[vertex1].indexOf(vertex2);
    let index2 = this.adjacencyList[vertex2].indexOf(vertex1);
    this.adjacencyList[vertex1] = [
      ...this.adjacencyList[vertex1].slice(0, index1),
      ...this.adjacencyList[vertex1].slice(index1 + 1)
    ];
    this.adjacencyList[vertex2] = [
      ...this.adjacencyList[vertex2].slice(0, index2),
      ...this.adjacencyList[vertex2].slice(index2 + 1)
    ];
  }

  removeVertex(vertex) {
    /**
     * The function should accept a vertex to remove
     * The function should loop as long as there are any other vertices in the adjacency listfor that vertex
     * Inside of the loop call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
     * delete the key in the adjacency list for that vertex
     */
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  /**
   * The methods below are for graph traversals
   * uses of graph traversals
   * - Web crawlers
   * - Finding closest matches/ recommendations
   * - peer to peer networking
   * - Shortest path problems: { AI(Shortest path to win a game), Solving mazes, GPS Navigation }
   *
   */

  DFS_recursive(start) {
    /**
     * the function should accept a starting node
     * create a list to store the end result, to be returned at the very end
     * create an object to store visited vertices
     * create a helper which accepts a vertice
     * The helper function should return an array if the vertex is empty
     * The helper function should place the vertex it accepts into the visited object and push that vertex into the results array
     * Loop over all the values (neighbours) in the adjacencyList for that vertex
     * If any of those values have not been visited, recursively invoke the helper function with that vertex
     * Invoke the helper function with the starting vertex
     * Return the result array
     */
    let result = [];
    let visited = {};
    const adjacencyList = this.adjacencyList;
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbour => {
        if (!visited[neighbour]) return dfs(neighbour);
      });
    })(start);
    return result;
  }

  DFS_iterative(start) {
    /**
     * The function should accept a starting node
     * create a stack to help keep track of vertices(use a list or array)
     * create a list to store the end result, to be returned at the very end
     * create an object to store visited vertices
     * Add the starting vertex to the stack and mark it visited
     * While the stack has something in it:
     * - pop the next vertex from the stack
     * - if that vertex hasn't been visited yet; - mark it as visited, - add it to the result list,  - push all of its neighbours into the stack
     * Return the result array.
     *
     */
    let stack = [start];
    let result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbour => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      });
    }
    return result;
  }

  BFS() {
    /**
     * function should accept a starting vertex
     * Create a queue ( you can use an array) and place the starting vertex in it
     * create a results array that we return at the end (to store the nodes visited)
     * create an object to store the nodes visited
     * Mark the starting node as visited
     * Loop as long as there is anything in the queue
     * Remove the first vertex from the queue and push it into the array that stores nodes visited
     * Loop over each vertex in the adjacency list for the vertex you are visiting
     * If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
     */
    const queue = [start];
    const result = [];
    let visited = {};
    let currentVertex;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbour => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
    return result;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
// g.DFS_recursive("Dallas");
console.log(g.DFS_recursive("A"));

///          A
//        /     \
//       B       C
//      /        \
//     D -------- E
//     \         /
//         F
