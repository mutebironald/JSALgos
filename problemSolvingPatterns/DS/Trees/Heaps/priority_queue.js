/**
 * write a Min Binary Heap - lower number means higher priority
 * Each node has a value and a priority. Use the priority to build the heap
 * Enqueque method accepts a value and priority, makes a new node, and puts it in the right spot based off its priority
 * Dequeue method removes root element, returns it , and rearranges heap using priority
 */

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
    let index, parentIndex, element, parent;
    index = this.values.length - 1;
    element = this.values[index];
    while (index > 0) {
      parentIndex = Math.floor((index - 1) / 2);
      parent = this.values[parentIndex];

      //put a break clause
      if (element.priority <= parent.priority) break;

      //perform a swap
      let k = this.values[parentIndex];
      this.values[parentIndex] = this.values[index];
      this.values[index] = k;

      index = parentIndex;
    }
    // console.log(this.values);
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

    console.log("+++max", max, this.values);
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
        if (leftChild.priority > element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
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

let ER = new PriorityQueue();
ER.enqueue("common cold", 1);
ER.enqueue("gunshot wound", 5)
ER.enqueue("high fever", 2) 
console.log(ER.dequeue())
