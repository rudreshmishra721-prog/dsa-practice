// Implementing Stack Using Queue
class Queue {
    constructor(){
        this.item = [];
    }
    enqueue(element){
        this.item.push(element);
    }
    dequeue(){
        return this.item.shift();
    }
    peek(){
        return this.item[0];
    }
    get length(){
        return this.item.length;
    }

}
class StackUsingQueue {
    constructor() {
       this.queue = new Queue(); 
    }

    push(element){
        const length = this.queue.length
        this.queue.enqueue(element);
        for(let i = 0; i < length; i++){
            this.queue.enqueue(this.queue.dequeue());
        }
    }


    pop() {
        if(this.isEmpty()) return "Underflow";
        return this.queue.dequeue();

    }
    peek(){
        if (this.isEmpty()) return "Stack is empty";
        return this.queue.peek();
    }
    isEmpty(){
        return this.queue.length === 0;
    }
    size (){
        return this.queue.length;
    }
    
}
const stack = new StackUsingQueue();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // 20
console.log(stack.pop());  // 20
console.log(stack.peek()); // 10