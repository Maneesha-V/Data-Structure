// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time
class MinStack{
    constructor(){
        this.stack=[]
        this.minStack=[]
    }
    push(x){
        this.stack.push(x)
        if(this.minStack.length===0 || x<=this.getMIn()){
            this.minStack.push(x)
        }
    }
    pop(){
        const popped = this.stack.pop()
        if(popped===this.getMIn()){
            this.minStack.pop()
        }
        return popped
    }
    getMIn(){
        return this.minStack[this.minStack.length-1]
    }
}
const minSt = new MinStack()
minSt.push(-1)
minSt.push(0)
minSt.push(2)
console.log(minSt.getMIn());
console.log(minSt.pop());
