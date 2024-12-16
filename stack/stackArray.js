class Stack{
    constructor(){
        this.stack = [];
    }
    isEmpty(){
        return this.stack.length === 0
    }
    size(){
        return this.stack.length
    }
    push(element){
        this.stack.push(element)
    }
    pop(){
        if(this.isEmpty()){
            return "Stack is empty";           
        }else{
            return this.stack.pop()
        }
    }
    peek(){
        if(this.isEmpty()){
            return "Stack is empty"
        }else{
            return this.stack[this.stack.length-1]
        }
    }
    print(){
        console.log(this.stack);        
    }
}
const myStack = new Stack()
myStack.push(2)
myStack.push(5)
myStack.push(6)
myStack.push(8)
myStack.push(-2)
myStack.print()
myStack.pop()
myStack.print()
console.log(myStack.peek());
