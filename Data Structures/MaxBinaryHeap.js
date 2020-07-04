class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  //for inserting values into binary heap
  insert(val) {
    this.values.push(val);
    let index = this.values.length - 1;
    while (index) {
      let parent = this.findParent(index);
      if (this.values[parent] < val) {
        this.values[index] = this.values[parent];
        this.values[parent] = val;
      }
      index = parent;
    }
    return this.values;
  }
  findParent(no) {
    return parseInt((no - 1) / 2);
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
