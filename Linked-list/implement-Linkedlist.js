class Linkedlist {
    constructor(value){
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newnode = {
        value: value,
        next : null,
    }
    this.tail.next = newnode;
    this.tail = newnode;
    this.length++;
    return this;
    }
}  
const mylinkedlist = new Linkedlist(10)
mylinkedlist.append(20)
console.log(mylinkedlist)