class Stack {
    constructor(){
        this.items = [];
    }

    push(value){
        this.items.push(value)
    }

    peek(){
        return this.items[this.items.length-1];
    }
    pop() {
        return this.items.pop();
    }
    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }
    clear(){
        this.items = [];
    }

}

const myStack = new Stack();
console.log(myStack);
console.log(`Before insertion isEmpty: ${myStack.isEmpty()}`);
myStack.push(5);
myStack.push(8);
myStack.push(11);
myStack.push(15);
console.log(`After insertion on top: ${myStack.peek()}`);
console.log(`After insertion isEmpty: ${myStack.isEmpty()}`);
console.log(`After insertion size: ${myStack.size()}`);
console.log(`Pop from  the top: ${myStack.pop()}`);
console.log(`After pop on top: ${myStack.peek()}`);
console.log(`After pop isEmpty: ${myStack.isEmpty()}`);
console.log(`After pop size: ${myStack.size()}`);