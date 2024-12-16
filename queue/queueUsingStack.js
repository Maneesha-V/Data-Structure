//Build queue using stack
class QueueUsingStacks {
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }
    isEmpty(){
        return this.stack1.length===0 && this.stack2.length===0
    }
    enqueue(value){
        this.stack1.push(value)
    }
    dequeue(){
        if(this.isEmpty()) return null
        if(this.stack2.length===0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }
    peek(){
        if(this.isEmpty()) return null
        if(this.stack2.length===0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2[this.stack2.length-1]
    }
}
const qu = new QueueUsingStacks()
qu.enqueue(10)
qu.enqueue(20)
qu.enqueue(30)
console.log(qu.dequeue());
console.log(qu.peek());
