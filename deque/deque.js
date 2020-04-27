class Deque{
    constructor(){
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
    addBack(element){
        this.items[this.count] = element;
        this.count++;
    }

    addFront(element){
        if(this.isEmpty()){
            return this.addBack();
        }
  
        this.items[this.lowestCount-1] = element;
        this.lowestCount--;
    }

    removeFront(){
        if(this.isEmpty()){
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    removeBack(){
        if(this.isEmpty()){
            return undefined;
        }
        const result = this.items[this.count-1];
        delete this.items[this.count-1];
        this.count--;
        return result;
    }
    peekFront(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    peekBack(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.count-1];
    }
    size(){
        return (this.count - this.lowestCount);
    }
    isEmpty(){
        return (this.count - this.lowestCount) === 0;
    }
}

const myDeque = new Deque();
myDeque.addBack(1);
myDeque.addBack(2);
myDeque.addBack(3);
myDeque.addFront(4);
myDeque.addFront(5);
console.log(`After enqueueing deque isEmpty: ${myDeque.isEmpty()}`);
console.log(`After enqueueing size is: ${myDeque.size()}`);
console.log(`After enqueueing in front is: ${myDeque.peekFront()}`);
console.log(`After enqueueing in back is: ${myDeque.peekBack()}`);
console.log(`Removing from back of the deque: ${myDeque.removeBack()}`);
console.log(`Removing from front of the deque: ${myDeque.removeFront()}`);
console.log(`After dequeueing size is: ${myDeque.size()}`);
