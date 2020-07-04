class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.currentPosition = this.root;
  }

  //function for inserting node into binarySearchTree
  insert(value) {
    if (!this.root) {
      console.log("Inserting " + value);
      this.root = new Node(value);
      console.log(JSON.stringify(this, null, 2));
    } else if (value > this.root.value) {
      this.traverseRight(this.root, value);
    } else {
      this.traverseLeft(this.root, value);
    }
  }

  traverseRight(pos, value) {
    this.currentPosition = pos.right;
    if (!this.currentPosition) {
      console.log("Inserting " + value);
      pos.right = new Node(value);
      console.log(JSON.stringify(this, null, 2));
    } else if (value > this.currentPosition.value)
      this.traverseRight(this.currentPosition, value);
    else this.traverseLeft(this.currentPosition, value);
  }
  traverseLeft(pos, value) {
    this.currentPosition = pos.left;
    if (!this.currentPosition) {
      console.log("Inserting " + value);
      pos.left = new Node(value);
      console.log(JSON.stringify(this, null, 2));
    } else if (value > this.currentPosition.value)
      this.traverseRight(this.currentPosition, value);
    else this.traverseLeft(this.currentPosition, value);
  }

  find(value) {
    if (!this.root) {
      console.log("No node found.");
      return;
    }
    if (value > this.root.value) this.checkRight(this.root, value);
    if (value < this.root.value) this.checkLeft(this.root, value);
  }
  checkRight(pos, value) {
    if (!pos.right) {
      console.log("No node found. in right");
      return;
    }
    if (pos.right.value == value) {
      console.log("Node found", pos.right.value);
      return;
    }
    if (value > pos.right.value) this.checkRight(pos.right, value);
    if (value < pos.right.value) this.checkLeft(pos.right, value);
  }
  checkLeft(pos, value) {
    if (!pos.left) {
      console.log("No node found. in left");
      return;
    }

    if (pos.left.value == value) {
      console.log("Node found.", pos.left.value);
      return;
    }
    if (value > pos.left.value) this.checkRight(pos.left, value);
    if (value < pos.left.value) this.checkLeft(pos.left, value);
  }
}

let bst = new BinarySearchTree();
bst.insert(41);
bst.insert(45);
bst.insert(40);
bst.insert(50);
bst.insert(20);
bst.find(50);
