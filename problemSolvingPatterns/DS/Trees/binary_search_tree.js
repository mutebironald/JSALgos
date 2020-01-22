class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    /**
     * create a new node
     * starting at the root, check if there is a root, if not - the root now becomes the new node
     * if there is a root, check if the value of the new node is greater than or less than the value of the root
     * if it is greater, check to see if there is a node to the right
     * if there is, move to that node and repeat these steps
     * if there is not, add that node as the right property
     * if it is less, check to see if there is a node to the left
     * if there is, move to that node and repeat these steps
     * if there is not, add that node as the left property
     */
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  contains(value) {
    /**
     * starting at the root
     * check if there is a root, if not, we are done with searching
     * if there is a root, check if the value of the new node is the value we are looking for
     * if we found it, we are done
     * if not check to see if it the value is greater than or less than the value of the root
     * if it is greater, check to see if there is a node to the right. if there is move to that node and repeat these steps. if there is not, we are done with searching
     * if it is less, check to see if there is a node to the left, if there is move to that node and repeat these steps. if there is not we are done searching.
     *
     */
    if (this.root === null) return false;
    var current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  BFS() {
    //breadth_first_search
    //the idea is to visit all the nodes horizontally starting from the root node.
    /**
     * create a queue (this can be an array) and a variable to store the values of the nodes visited
     * place the root node in the queue
     * loop as long as there is anything in the queue
     * Dequeue a node from the queue and push the value of the node into the variable that stores nodes
     * if there is a left property on the node dequeued - add it to the queue
     * if there is a right property on the node dequeued - add it to the queue
     * return the variable that stores the values.
     */
    let queue = [];
    let visited = [];
    let node;
    if (!this.root) return undefined;

    queue.push(this.root);

    while (queue.length) {
      node = queue.shift();
      visited.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }

  DFS_preOrder() {
    //this a depth first search
    //idea is to traverse by height/depth
    /**
     * create a variable to store the values of the nodes visited
     * store the root of the BST in a variable called current
     * write a helper function which accepts a node
     * push the value of the node to the variable that stores the values
     * if the node has a left property , call the helper function with the left property on the node
     * if the node has a right property, call the helper function with the right property on the node
     * invoke the helper function with the current variable
     * Return the array of values.
     */
    var data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);

    return data;
  }

  DFS_postOrder() {
    /**
     * create a variable to store the values of the nodes visited
     * store the root of the BST in a variable called current
     * write a helper function which accepts a node
     * if the node has a left property, call the helper function with the left property on the node
     * if the node has a right property, call the helper function with the right property on the node
     * push the value of the node to the variable that stores the values
     * invoke the helper function with the current variable
     * Return the array of values.
     */
    var data = [],
      current;
    current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(current);
    return data;
  }

  DFS_inOrder() {
    /**
     * create a variable to store the values of the nodes visited
     * store the root of the BST in a variable called current
     * write a helper function which accepts a node
     * if the node has a left property, call the helper function with the left property on the node
     * *push the value of the node to the variable that stores the values
     * if the node has a right property, call the helper function with the right property on the node
     * invoke the helper function with the current variable
     * Return the array of values.
     */
    var data = [],
      current;
    current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}

//       10
//   5        13
//2    7    11   16

var tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(16);
tree.insert(2);
tree.insert(7);

console.log(tree.DFS_inOrder());
