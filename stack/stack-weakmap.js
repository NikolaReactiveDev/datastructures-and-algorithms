items = new WeakMap();

class Stack{
    constructor(){
        items.set(this, []);
    }

    push(element){
        let s  = items.get(this);
        s.push(element);
    }

    peek(){
        let s  = items.get(this);
        if(s.length === 0){
            return undefined;
        }
        return s[s.length-1];
    }

    pop(){
        let s  = items.get(this);

        if(s.length === 0){
            return undefined;
        }
        return s.pop();
    }

    isEmpty(){
        let s = items.get(this);
        return s.length === 0;
    }

    size(){
        let s  = items.get(this);
        return s.length;
    }

    clear(){
        items.set(this, []);
        items.set(count, 0);
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