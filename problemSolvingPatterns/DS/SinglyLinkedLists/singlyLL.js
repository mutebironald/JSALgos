class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //implementing the push.
  push(val) {
    let newNode = new Node(val);

    //if there is no head property on the list, set the head and tail to be the newly created node
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }

    //set the next property on the tail to be the new node
    //set the tail property on the list to be the newly created node
    this.tail.next = newNode;
    this.tail = newNode;

    //increment the length by 1
    this.length++;
    return this;
  }

  traverse() {
    var current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  pop() {
    //logic
    /**
     * if there aree no nodes in the list return undefined
     * loop through the list until you reach the tail
     * set the next property of the 2nd to last node to be null
     * set the tail to be the 2nd to last node
     * Decrement the length of the list by 1
     * Return the value of the node removed
     */
    if (!this.head) {
      return undefined;
    }
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return cuurent;
  }

  shift() {
    /**
     * if there are no nodes return undefined
     * store the current head property in a variable
     * set the head property to be the current head's next property
     * Decrement the length by one
     * return the value of the node removed.
     */
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    /**
     * This function should accept a value
     * Create a new node using the value passed to the function
     * If there is no head property on the list , set the head and tail to be the newly created node
     * Otherwise set the newly created node's next property to be the current head property on the list
     * set he head property on the list to be that newly created node
     * increment the length of the list by one
     * Return the linked list.
     */
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    /**
     * function should accept an index
     * if the index is less than zero or greater than or equal to the length of the list , return null
     * loop through the list until you reach the index and return he node at the specified index
     */
    if (index < 0 || index >= this.length) {
      return null;
    }
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    /**
     * function should accept a value and an index
     * use your get function to find a specific node
     * if the node is not found return false
     * if the node is found, set the value of that node to be the value passed to the function and return true
     *
     */
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    /**
     * if the index is less than zero or greater than the length , return false
     * if the index is the same as the length, push the new node to the end of the list
     * if the index is zero, unshift the get method, access the node at the index -1.
     * set the next property on that node to be the new node
     * set the next property on the new node to be the previous next
     * increment the length
     * Return true
     */
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      return !!this.push(val);
    }
    if (index === 0) {
      return !!this.unshift(val);
    }
    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    /**
     * if the index is less than zero or greater than the length, return undefined
     * if the index is the same as the length-1, pop
     * if the index is 0, shift
     * Otherwise using the get method, access the node at index - 1
     * Set the next property on that node to be the next of the next node
     * Decrement the length
     * Return the value of the node removed
     */
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      this.pop();
    }
    var previousNode = this.get(index - 1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  print(){
    var arr = [];
    var current = this.head;
    while(current){
      arr.push(current.val)
      current = current.next;
      console.log(arr)
    }
  }

  reverse(){
    /**
     * swap head and tail
     * create a variable called next
     * create a variable  called prev
     * create a variable called node and initialize it to the head property
     * loop through the list
     * set next to be the next property on whatever node is
     * set the next property on the node to be whatever prev is
     * set prev to be the value of the node variable
     * set the node variable to be the value of the next variable
     */
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for(var i =0; i < this.length; i++){
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

var first = new SinglyLinkedList();
first.push("HELLO");
first.push("GOODBYE");

console.log(first.print());
