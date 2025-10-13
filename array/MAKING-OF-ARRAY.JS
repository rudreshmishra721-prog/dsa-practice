//We are building a array from scratch, how array works, and how push() pop() delete() are made 
//we are using class to make array, we are building our own array 
//array in js are just object with intiger based keys that act like indexs

class myArray {
    constructor(){
        this.length = 0
        this.data = {}
    }

    get(index){
        return this.data[index]// in this get method when we use .get(0) or get(1) this
                               // code works and se what is the value of index 0 or in index 1
       
    }

    push(item){                       //this method is used to add somthing at the end of array 
        this.data[this.length] = item //If length is 0, add at index 0. Then increase length. 
                                      //If length is 1, add at index 1. Then increase length. And so on…
        this.length++   
        return this.length
    }

    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1]; //removes the last item in the array 
        this.length--;//after removing the last item from the array it decrement the length of an array 
        return lastItem   
    }

    delete(index){
        const item = this.data[index];// Save the item we want to delete (optional, in case we want to return it)
        this.shiftItem(index)         // Call helper to shift elements left
        return item                   // return deleted item like JS array does
    }
    shiftItem(index){
        for(let i = index; i < this.length - 1; i++){   // Start from the index where item was deleted, and move each item one step left
            this.data[i] = this.data[i + 1];            // Example: data[2] = data[3]
    }

        
        delete this.data[this.length - 1]               // Remove the duplicate last element (since it was shifted left already)
        this.length--;                                  // Decrease the length by 1
    }
}

const arr  = new myArray();

arr.push('hi')
arr.push('how')
arr.push('are')
arr.push('you')
console.log(arr.delete(0))
console.log(arr)