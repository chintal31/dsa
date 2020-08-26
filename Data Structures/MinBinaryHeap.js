class MinBinaryHeap {
  constructor() {
    this.values = [];
  }
  //[1,2,4,3]
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    let index = this.values.length - 1;
    while (index) {
      let parent = this.findParent(index);
      if (newNode.priority < this.values[parent].priority) {
        this.values[index] = this.values[parent];
        this.values[parent] = newNode;
      }
      index = parent;
    }
    return this.values;
  }
  //[2,4,3,9,5,6,7,8]
  //      2
  //   4        3
  // 8   5    6    7
  //9

  dequeue() {
    let max = this.values[0];
    this.values[0] = this.values.pop();
    let currentIndex = 0;
    let parent = this.values[currentIndex];
    while (true) {
      let leftChild = currentIndex * 2 + 1;
      let rightChild = currentIndex * 2 + 2;
      let swap = null;
      if (
        this.values[leftChild] &&
        this.values[currentIndex].priority > this.values[leftChild].priority
      ) {
        swap = leftChild;
      }
      if (
        (this.values[rightChild] &&
          !swap &&
          this.values[currentIndex].priority >
            this.values[rightChild].priority) ||
        (this.values[rightChild] &&
          swap &&
          this.values[leftChild].priority > this.values[rightChild].priority)
      ) {
        swap = rightChild;
      }
      console.log("swap,", swap);
      if (!swap) break;
      this.values[currentIndex] = this.values[swap];
      this.values[swap] = parent;
      currentIndex = swap;
      console.log("this.values", this.values);
    }
    console.log(this.values.length);
    return max;
  }
  findParent(index) {
    return parseInt((index - 1) / 2);
  }
}

class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}

let mbh = new MinBinaryHeap();
mbh.enqueue("german", 3);
mbh.enqueue("gtu", 2);
mbh.enqueue("dsa", 1);
mbh.enqueue("g", 4);
mbh.dequeue();

//Mistakes
// forgot to handle null value cases
//
