class Queue{
    constructor(){
        this.queue=[]
    }
    isEmpty(){
        return this.queue.length === 0
    }
    enqueue(element){
        this.queue.push(element)
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("Empty");           
        }else{
            return this.queue.shift() //O(n) comes here it's a problem
        }
    }
    peek(){
        return this.queue[0]
    }
    display(){
        if(this.isEmpty()){
            console.log("Empty");           
        }else{
            console.log(this.queue);           
        }
    }
}
const qu = new Queue()
qu.enqueue(30)
qu.enqueue(40)
qu.enqueue(50)
qu.display()
qu.dequeue()
qu.display()
console.log("Top element "+qu.peek());
