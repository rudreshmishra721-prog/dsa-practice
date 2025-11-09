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
     insert(index , value){
        if(index === 0){
            return this.prepend(value);
        }
        if(index >= this.lenght){
            return this.append(value);
        }
        const newNode = {
            value: value,
            next : null,
        };
        const leader = this.traverseToIndex(index - 1)
        const holdingppointer = leader.next;
        leader.next = newNode
        newNode.next  = holdingppointer;
        this.length++
        return this.printiList()
    }
     traverseToIndex(index){
            let counter = 0;
            let currentNode = this.head;
            while(counter !== index){
                currentNode = currentNode.next;
                counter++;
            }
            return currentNode
        } 
}  
const mylinkedlist = new Linkedlist(10)
mylinkedlist.append(20)
mylinkedlist.insert(0, 99);
mylinkedlist.insert(3, 94);
console.log(mylinkedlist.printiList())
