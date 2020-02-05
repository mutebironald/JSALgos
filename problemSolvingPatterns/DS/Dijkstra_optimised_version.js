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

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      //put a break clause
      if (element.priority >= parent.priority) break;

      //perform a swap
      //   let k = this.values[parentIndex];
      //   this.values[parentIndex] = this.values[index];
      //   this.values[index] = k;
      this.values[parentIndex] = element;
      this.values[index] = parent;

      index = parentIndex;
    }
    return this.values;
  }

  dequeue() {
    /**
     * Swap the first value in the values property with the last one
     * pop from the values property, so you can  return the value at the end
     * Have the new root "sink down" to the correct spot
     * Your parent index starts at 0 ( the root)
     * Find the index of the left child: 2 * index + 1 ( make sure its not out of bounds)
     * Find the index of the right child: 2 * index + 2 (make sure its not out of bounds)
     * if the left or right child is greater than the element...swap. If bothleft and right children are greater, swap with the largest child
     * The child index you swapped to now becomes the new parent index
     * Keep looping and swapping until neither child is larger than the element
     * Return the old root
     */
    let end = this.values.pop();
    let max = this.values[0];
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
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

console.log(graph.Dijkstra("A", "E"));
