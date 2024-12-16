class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList{
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
            console.log("empty");
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
    append(value){
        const node = new Node(value)      
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;           
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }
    remFromFront(){
        if(this.isEmpty()){
            return null
        }
        if(this.size === 1){
            this.head = null
            this.tail = null
        }else{
            this.head = this.head.next
            this.head.prev = null
        }
        this.size--;
    }
    remFromLast(){
        if(this.isEmpty()){
            return null
        }
        if(this.size === 1){
            this.head = this.tail = null
        }else{
            this.tail = this.tail.prev
            this.tail.next = null
        }
        this.size--;
    }
    get(index){
        if(index < 0 || index >= this.size){
            return null
        }
        let curr;
        if(index <= Math.floor(this.size/2)){
            let i = 0
            curr = this.head
            while(i !== index){
                curr = curr.next
                i++
            }
        }else{
            let i = this.size-1
            curr = this.tail
            while(i !== index){
                curr  = curr.prev
                i--
            }
        }
        return curr
    }
    set(index,value){
        let node = this.get(index)
        if(node){
            node.value = value
        }
    }
    insert(index,value){
        
    }
}
const list = new DoublyLinkedList()
list.append(10)
list.append(20)
list.prepend(5)
list.displayAll()
// console.log(list.get(1));
// console.log(list.get(2));
list.set(1,15);

// list.remFromFront()
list.displayAll()
// list.remFromLast()
// list.displayAll()
