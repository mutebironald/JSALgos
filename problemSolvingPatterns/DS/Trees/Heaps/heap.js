/**
 * push the value into the values property on the heap
 * *Bubble up:
 * *create a variable called index which is the length of the values property - 1
 * *Create a variable called parentIndex which is the floor of (index - 1)/2
 * *Keep looping as long as the values element at the parent index is less than the values element at the child index
 * * swap the value of the values element at the parent index with the value of the element property at the child index
 * * set the index to be the parent index and start orver!
 */

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
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
      if (parent >= element) break;

      //perform a swap
      let k = this.values[parentIndex];
      this.values[parentIndex] = this.values[index];
      this.values[index] = k;

      index = parentIndex;
    }
    // console.log(this.values);
    return this.values;
  }

  extractMax() {
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
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap();
// 41, 39, 33, 18, 27, 12, 55
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

heap.extractMax();
