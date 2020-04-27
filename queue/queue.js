class Queue{
    constructor(){
        this.items = {}; // storage for queue elements
        this.count = 0; // how many elements are in queue
        this.lowestCount = 0; //track wheres the beginning of queue
    }
    
    enqueue(element){
        this.items[this.count] = element;
        this.count++;
    }

    dequeue(){
        if(this.size() === 0){
            return undefined;
        }
        const result = this.items[this.lowestCount];
        const newLowestCount = this.lowestCount+1;
        delete this.items[this.lowestCount];
        this.lowestCount = newLowestCount;
        return result;
    } 

    size(){
        return (this.count - this.lowestCount);
    }

    isEmpty(){
        return this.size() === 0;
    }
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
}

const myQueue = new Queue();
console.log(`isEmpty when created: ${myQueue.isEmpty()}`);
myQueue.enqueue(3);
myQueue.enqueue(5);
myQueue.enqueue(7);
myQueue.enqueue(9);
console.log(`Elements in queue after insert: ${myQueue.items}`);
console.log(`Num of elements in queue after insert: ${myQueue.size()}`);
console.log(`Dequeue of first entered element: ${myQueue.dequeue()}`);
console.log(`Num of elements in queue after insert: ${myQueue.size()}`);
console.log(`Dequeue of second entered element: ${myQueue.dequeue()}`);
myQueue.enqueue(11);
myQueue.enqueue(12);
console.log(`Num of elements in queue after 2 insert: ${myQueue.size()}`);
console.log(`Dequeue of third entered element: ${myQueue.dequeue()}`);
console.log(`Dequeue of fourth entered element: ${myQueue.dequeue()}`);
console.log(`Dequeue of fifth entered element: ${myQueue.dequeue()}`);
console.log(`Dequeue of last entered element: ${myQueue.dequeue()}`);
console.log(`Dequeue of empty queue: ${myQueue.dequeue()}`);
 