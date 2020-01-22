//a linked list implementation
//note in an array we can use the push and pop or the unshift and shift methods to implement a stack.


//here we are adding and removing from the beginning of the list(shift and unshift) though we are referring to it as push and pop.
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    /**
     * The function should accept a value
     * create a new node with that value
     * if there are no nodes in the stack, set the first and last property to be the newly created node
     * if there is atleast one node, create a variable that stores the current first property on the stack
     * Reset the first property to be the newly created node
     * Set the next property on the node to be the previously created variable
     * increment the size of the stack by 1.
     */
    var newNode = Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.last;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    /**
     * if there are no nodes in the stack, return null
     * else, create a temporary variable to store the first property on the stack
     * if there is only one node, set the first and last property to be null
     * if there is more than one node, set the first and last property to be null.
     * if there is more than one node, set the first property to be the next property on the current first
     * Decrement the size by 1
     * Return the value of the node removed.
     */
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}
