var Node  = require('./Nodes');

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(element) {
    //add element at last index
    console.log("Pushing "+element);
    let newNode = new Node(element);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return true;
  }
  pop() {
    //remove element from last index
    console.log("Poping "+element);
    if (!this.head) return false;
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return true;
    }
    this.temp = this.head;
    while (this.temp.next.val != this.tail.val) {
      //console.log(this.temp);
      this.temp = this.temp.next;
    }
    this.tail = this.temp;
    this.tail.next = null;
    this.length--;
    return true;
  }
  shift() {
    //remove first element
    console.log("Shifting "+element);
    if (!this.head) return undefined;
    this.head = this.head.next;
    if (this.head == this.tail) {
      this.tail = null;
    }
    this.length--;
    return true;
  }
  unshift(element) {
    //add element at first index
    console.log("Unshifting "+element);
    let newNode = new Node(element);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return true;
  }
  get(index) {
    console.log("fetching element at "+index);
    if (index < 0 || index >= this.length) return null;
    let ctr = 0;
    let num = this.head;
    while (ctr != index) {
      num = num.next;
      ctr++;
    }
    return num;
  }
  set(index, element) {
    console.log("Setting "+element+" at "+index);
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = element;
    }
    return true;
  }
  insert(index, val) {
    console.log("Inserting "+val+" at "+index);
    if (index < 0 || index > this.length) return false;
    if (index == 0) this.unshift(val);
    if (index == this.length) this.push(val);
    let previousNode = this.get(index-1);
    let newNode = new Node(val);
    let foundNode = this.get(index);
    newNode.next = foundNode;
    newNode.val = val;
    previousNode.next = newNode;
    this.length++;
    return true;
  }
  remove(index){
    //removing from any position
      if(index<0  || index>=this.length) return null;
      if(index==0 ){   //this.shift()
        if(this.head == this.tail)
        {
            this.head = null; 
            this.tail = null;
            this.length--;
            return;
        }else{
            let followingNode = this.get(index+1);
            this.head = followingNode;
            this.length--;
            return;        
        }
    }
      let previousNode = this.get(index-1);
      if(index == this.length-1){   //this.pop()
        previousNode.next = null;
        this.tail = previousNode;
        this.length--;
        return;
    }  
        let followingNode = this.get(index+1);
        previousNode.next = followingNode;
        this.length--;
  }
  reverse(){
    let currentNode = this.head;
    let nextNode = this.head.next;
    currentNode.next = null;
    let firstNode = currentNode;
    let previousNode = currentNode;
    currentNode = nextNode;
    while(currentNode.next != null){
      nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }
    currentNode.next = previousNode;
    this.head = currentNode;
    this.tail = firstNode;
    return this;
  }
  printList() {
    console.log("this.head: ",this.head);
    console.log("this.head.next: ",this.head.next);
    console.log("this.head.next.next: ",this.head.next.next);
  }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.reverse();
list.printList();