class Queue{
    constructor(){
        this.items = []
        this.front = 0
        this.rear = 0
    }
    display(){
        if(this.isEmpty()){
            console.log("EMpty");            
        }else{
            console.log(this.items);           
        }
    }
    isEmpty(){
        return this.front - this.rear === 0
    }
    enqueue(element){
        this.items[this.rear] = element
        this.rear++
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("Empty");           
        }else{
            const item = this.items[this.front]
            delete this.items[this.front]
            this.front++
            return item
        }
    }
    peek(){
        if(this.isEmpty()){
            console.log("Empty");            
        }else{
            return this.items[this.front]
        }
    }
    size(){
        return this.rear-this.front
    }
}
const qu = new Queue()
qu.enqueue(10)
qu.enqueue(20)
qu.enqueue(30)
qu.enqueue(40)
qu.display()
console.log(qu.dequeue());
qu.display()
console.log(qu.peek());
console.log(qu.size());
