class DoublyLinkedList {
    constructor(value){
        this.head = {
        value: value,
        prev: null,
        next : null,
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode  ={
            value: value,
            prev: null,
            next: null,
        };
        newNode.prev = this.tail;
        this.tail.next  = newNode;
        this.tail = newNode
        this.length++;
        return this;

    }
    prepand(value){
        const newNode = {
            value : value,
            prev: null,
            next: null,
        };
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
        
    }
    printList() {
      const array = [];
      let currentNode = this.head;
      while (currentNode !== null) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
      return console.log(array);
    }
    
}

let myDoublyLinkedlist = new DoublyLinkedList(10)
console.log(myDoublyLinkedlist.append(20))