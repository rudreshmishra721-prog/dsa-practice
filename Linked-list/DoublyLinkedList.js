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
        // return this;

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
        // return this
        
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
    insert(index, value){
        if(index >= this.length){
            console.log("yeas");
            return this.append(value);
        }
        const newNode = {
            value: value,
            prev: null,
            next: null,
        };
        const leader = this.TraverseToIndex(index - 1);
        const follower = leader.next
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++

        
    }
    traverseToIndex(index) {
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    remove(index) {
      const leader = this.traverseToIndex(index - 1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
      return this.printList();
    }
    reverse() {
      if (!this.head.next) {
        return this.head;
      }
      let first = this.head;
      this.tail = this.head;
      let second = first.next;
  
      while(second) {
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
      }
  
      this.head.next = null;
      this.head = first;
      return this.printList();
    }
  

}

let myDoublyLinkedlist = new DoublyLinkedList(10)
console.log(myDoublyLinkedlist.append(20))
console.log(myDoublyLinkedlist.prepand(220))
console.log(myDoublyLinkedlist.reverse())
console.log(myDoublyLinkedlist)
