class Stack {
    constructor() {
        this.stack = [];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    size() {
        return this.stack.length;
    }

    display() {
        console.log(this.stack);
    }
}
function remSelectElt(st,target){
    if(st.isEmpty()) return null
    let top = st.pop()
    if(top!==target){
        remSelectElt(st,target)
        st.push(top)
    }   
}
const st = new Stack()
st.push(20)
st.push(30)
st.push(40)
st.display()
remSelectElt(st,30)
st.display()


