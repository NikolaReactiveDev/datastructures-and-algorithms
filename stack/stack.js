class Stack{
    constructor(){
        this.items ={};
        this.count = 0;
    }

    push(element){
        this.items[this.count] = element;
        this.count++;
    }

    peek(){
        if(this.count===0){
            return undefined;
        }
        return this.items[this.count-1];
    }

    pop(){
        if(this.count===0){
            return undefined;
        }
        let value = this.items[this.count-1];
        delete this.items[this.count-1];
        this.count--;
        return value;
    }

    size(){
        return this.count;
    }

    isEmpty(){
        return this.count === 0;
    }
    
    clear() {
        this.items = {};
        this.count = 0;
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