class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLInkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    /**
     * create a new Node with the value passed to the function
     * if the head property is null, set the head and tail to be the new node
     * if not, set the next property on the tail to be that node
     * Set the previous property on the newly created node to be the tail
     * set the tail to be the newly created node
     * increment the length
     * Return the Doubly Linked list
     */
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    /**
     * if there is no head , return undefined
     * otherwise, store the current tail in a variable to return later
     * if the length is 1, set the head and tail to be null
     * update the tail to be the previous node
     * set the new tail's next to be null.
     * Decrement the length
     * Return the value removed.
     */
    if (!this.head) {
      return undefined;
    }
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }

  shift() {
    /**
     * if the length is o return undefined
     * store the current head property in a variable
     * if the length is one, set the head and tail to be null
     * update the head to be the next of the old head
     * set the head's prev property tp be null
     * set the old head's next to be null
     * Decrement the length
     * return the old head.
     */
    if (this.length === 0) {
      return undefined;
    }
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    /**
     * create a new node with the value passed onto the function
     * if the length is zero, set the head and tail to be the newly created node
     * otherwise, set the prev property of the head to be the new node
     * set the next property on the new node to be the head property
     * update the head to be the new node
     * increment the list
     * return the list.
     */
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    /**
     * if the index is less than 0 or greater or equal to the length return null
     * if the index is less than or equal to half the length of the list, loop throughthe list starting from the head and loop towards the middle. then return the node once its found
     * if the index is greater than half the length of the list, loop through the list starting from the tail and loop towards the middle, then return the node once its found
     */
    if (index < 0 || index >= this.length) {
      return null;
    }
    var count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    /**
     * create a variable which is a result of the get method at the index passed to the function
     * if the get method returns a valid node, set the value of that node to be the value passed to the function
     * return true
     * otherwise return false.
     */
    let foundNode = this.get(index);
    if (foundNode && foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    /**
     * if the index is less than zero or greater than or equal to the length return false;
     * if the index is zero , unshift
     * if the index is the same as the length, push
     * use the get method to access the index - 1;
     * set the next and prev properties on the correct nodes to link everything together
     * increment the length
     * return true
     */
    if (this.index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) {
      return !!this.unshift(val);
    }
    if (index === this.length) {
      return !!this.push(val);
    }
    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    /**
     * if the index is zero or greater than or equal to the length return undefined
     * if the index is zero, shift
     * if the index is the same as the length - 1, pop
     * use the get method to retrieve the item to be removed
     * update the next and previous properties to remove the found node from the list
     * set next and previous to null on the found node
     * Decrement the length
     * return the removed node.
     */
    if (index === 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let removedNode = this.get(index);
    //NB: below, instead of chaining .prev.next, you can also use the before node like implementation used during insertion
    //var beforeNode = removedNode.prev;
    //var afterNode = removedNode.next;
    //beforeNode.next = afterNode;
    // afterNode.prev = beforeNode;

    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}
