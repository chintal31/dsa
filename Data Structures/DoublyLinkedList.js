class DoublyLinkedListNode{
  constructor(val){
      this.val = val;
      this.previous = null;
      this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(element) {
    //adding element at the end
    let node = new DoublyLinkedListNode(element);
    if (this.length > 0) {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = this.head;
    }
    this.length++;
  }
  pop() {
    //remove element from last position
    if (this.length == 0) return null;
    let poppedNode = this.tail;
    if (this.length == 1) {
      this.tail = null;
      this.head = this.tail;
    } else {
      this.tail = poppedNode.previous;
      this.tail.next = null;
      poppedNode.previous = null;
    }
    this.length--;
    console.log("poppedNode: ", poppedNode);
  }
  shift() {
    //removing element from the beginning of the list.
    if (this.length < 1) return null;
    if (this.length == 1) {
      this.head = null;
      this.tail = this.head;
    } else {
      let secondNode = this.head.next;
      secondNode.previous = null;
      this.head.next = null;
      this.head = secondNode;
    }
    this.length--;
  }
  unshift(val) {
    //adding element to the beginning of list
    let newNode = new DoublyLinkedListNode(val);
    if (this.length < 1) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
    this.length++;
  }
  get(index){
    if(index < 0 || index > this.length) return undefined;
    let currentNode = this.head;
    while(index > 0){
        currentNode = currentNode.next;
        index--;
    }
    return currentNode;
  }
  insert(index,element){
    if(index < 0 || index > this.length) return undefined;
    if( index == 0 ){this.unshift(element); return; }
    if(index == this.length ) { this.push(element); return; }
    let nodeAtIndex = this.head;
    while(index > 0){
        nodeAtIndex = nodeAtIndex.next;
        index--; 
    }
    let previousNode = nodeAtIndex.previous;
    let newNode = new DoublyLinkedListNode(element);
    newNode.next = nodeAtIndex;
    newNode.previous = previousNode;
    previousNode.next = newNode;
    nodeAtIndex.previous = newNode;
    console.log(this);
  }
  set(index,element){
    //update a value at given index
    if(index < 0 || index > this.length) return undefined;
    let nodeAtIndex = this.head;
    if( index == 0 ) {
      nodeAtIndex.val =  element;
      return;  
    }
    while(index > 0){
        nodeAtIndex = nodeAtIndex.next;
        index--; 
    }
    nodeAtIndex.val = element;
  }
  remove(index){
    if(index < 0) return undefined;
    if(index == 0){ this.shift(); return; }
    if( index == this.length ) { this.pop(); return; }
    let nodeToBeRemoved = this.get(index);
    nodeToBeRemoved.previous.next = nodeToBeRemoved.next;
    nodeToBeRemoved.next = null;
    nodeToBeRemoved.previous = null;
    this.length--;
    return nodeToBeRemoved;  
  }
  printList() {
    console.log("List: ", this);
  }
}

let list = new DoublyLinkedList();
list.push(2);
list.push(3);
list.push(4);
//list.printList();
//list.set(0,1);
list.printList();
list.set(2,5);  
list.printList();
// list.printList();
