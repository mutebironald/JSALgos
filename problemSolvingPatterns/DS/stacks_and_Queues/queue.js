class Node{
    constructor(val){
        this.value = value;
        this.next = null;
    }
}


class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size;
    }

    enqueue(val){
        /**
         * function accepts a value
         * create a new node using the value passed to that function
         * if there are no nodes in the queue, set this node to be the first and last property of the queue
         * increment the size of the queue by 1 and return that.
         */
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        /**
         * if there is no first property, just return null
         * store the first property in a variable
         * see if the first is the same as the last(check if there is only one node). If so, set the first and last to be null
         * if there is more than 1 node, set the first property to be the next property of the first
         * Decrement the size by 1
         * Return the value of the node dequeued.
         */
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
