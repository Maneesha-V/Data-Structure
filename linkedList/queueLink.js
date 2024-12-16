class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedQueue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0
    }
    displayAll(){
        if(this.isEmpty()){
            console.log("Empty");            
        }else{
            let curr = this.head
            let listValue = ''
            while(curr){
                listValue += `${curr.value} `
                curr = curr.next
            }
            console.log(listValue);           
        }
    }
    enqueue(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node 
            this.tail = node
        }
        this.size++
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        if(this.size===1){
            this.head = null
            this.tail = null
        }
        else{
            this.head = this.head.next
        }
        this.size--
    }
    peek(){
        return this.head.value
    }
}
const list = new LinkedQueue()
list.enqueue(10)
list.enqueue(20)
list.enqueue(30)
list.displayAll()
list.dequeue()
list.displayAll()
console.log(list.peek());
