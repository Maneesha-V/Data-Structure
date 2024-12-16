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
const st = new Stack()
st.push(20)
st.push(30)
st.push(40)
st.display()
remElt(st,30)
st.display()

function remElt(st,target){
    if(st.isEmpty()) return null
    const top = st.pop()
    if(top!==target){
        remElt(st,target)
        st.push(top)
    }
}