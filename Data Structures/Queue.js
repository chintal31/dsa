var Node  = require('./Nodes');

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.front) {
      this.front = newNode;
      this.rear = this.front;
    } else {
      let previousNode = this.rear;
      previousNode.next = newNode;
      this.rear = newNode;
    }
    this.length++;
    console.log("Enqueued: ", this);
  }

  dequeue() {
    if (!this.front) {
      console.log("null");
      return null;
    }
    let removedNode = this.front;
    if(this.front == this.rear){
        this.front = null;
        this.rear = null;
    }else{
        let nextNode = removedNode.next;
    removedNode.next = null;
    this.front = nextNode;
    }
    this.length--;
    console.log("RemovedNode - ", removedNode);
    console.log("queue after dequeue: ", this);
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();