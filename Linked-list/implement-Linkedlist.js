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
    prepend(value){
        const newnode = {
        value: value,
        next : null,
    }
    newnode.next = this.head;
    this.head = newnode;
    this.length++;
    return this;
    }
    printiList(){
        const array = [];
        let currnode = this.head;
        while(currnode !== null){
            array.push(currnode.value)
            currnode  = currnode.next
        }
        return array
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
         remove(index){
            const leader = this.traverseToIndex(index - 1)
            const unwantedNode = leader.next;
            leader.next = unwantedNode.next;
            this.length--;
            return this.printiList(); 
        }
}  
const mylinkedlist = new Linkedlist(10)
mylinkedlist.append(20)
mylinkedlist.prepend(50)
mylinkedlist.insert(0, 99);
mylinkedlist.insert(3, 94);
mylinkedlist.remove(2)
console.log(mylinkedlist.printiList())
