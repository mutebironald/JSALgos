/**
 * Every time we look to visit a node, we pick the node with the smallest known distance to visit first
 * Once we've moved to the node we're going to visit, we're going to look at each of its neighbours
 * For each neighbouring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node
 *if the new total distance to a node is less than the previous total, we store the new shorter distance for that node
 */
//A Simple Priority Queue
//this Dijkstra is slow because the priority queue is not implemented with a binary heap, so we are sorting the entire array every single time.
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  Dijkstra(start, finish) {
    /**
     * Djikstra's pseudo code:
     *
     * The function should accept a starting and end vertex
     * -  Create an object(we'll call it distances) and set key to be every vertex in the adjacency list with
     * a value of infinity, except for a starting vertex which should have a value of zero
     * - After setting a value in the distances object, add each vertex with a priority of infinity to the priority queue,
     * except the starting vertex, which should have a priority of zero because thats where we begin
     * - create another object called previous and set each key to be every vertex in the adjacency list with a value of null.
     * - start looping as long as there is anything in the priority queue.
     * :::in the loop,
     * ---dequeue a vertex from the priority queue
     * ---if that vertex is the same as the ending vertex - we are done!
     * ---otherwise loop through each  value in the adjacency list at that vertex,
     * :::::- calculate the distance to that vertex from the starting vertex
     * :::::- if the distance is less than what is currently stored in our distances object, update the
     * distances object with new lower distance, update the previous object to contain that vertex, enqueue the vertex with the total distance from the start node
     *
     */

    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; //to return at the end
    let smallest;

    //build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    //as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        //WE ARE DONE
        //BUILD UP PATH TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbour in this.adjacencyList[smallest]) {
          //find neighbouring node
          let nextNode = this.adjacencyList[smallest][neighbour];
          //calculate the distance to neighbouring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbour = nextNode.node;
          if (candidate < distances[nextNeighbour]) {
            //updating new smallest distance to neighbour
            distances[nextNeighbour] = candidate;
            //updating previous - How we got to neighbour
            previous[nextNeighbour] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbour, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.Dijkstra("A", "F"));
