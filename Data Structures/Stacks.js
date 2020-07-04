//Stack implementation using linkedlist
var Node  = require('./Nodes');

class Stack{
    constructor(){
        this.top = null;
        this.length=0;
    }
    push(val){
        let newNode = new Node(val);
        if(this.top) newNode.next = this.top;
        this.top = newNode;
        this.length++;
        console.log("pushed: ",this);
    }
    pop(){
        if(this.length < 1) {console.log("null"); return null;}
        let popedNode = this.top;
        this.top = popedNode.next;
        popedNode.next = null;
        this.length--;
        console.log("Poped: ",popedNode);
        console.log("stack after pop: ",this);
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();
stack.pop();
stack.pop();