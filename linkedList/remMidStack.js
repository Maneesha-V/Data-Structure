class Stack{
    constructor(){
        this.stack=[]       
    }
    isEmpty(){
        return this.stack.length===0
    }
    push(value){
        this.stack.push(value)
    }
    pop(){
        return this.stack.pop()
    }
    peek(){
        return this.stack[this.stack.length-1]
    }
    size(){
        return this.stack.length
    }
    display(){
        console.log(this.stack)
    }
}
function delMidElt(st){
    if(st.isEmpty()){
        return "Empty"
    }else{
        let mid = Math.floor(st.size()/2)
        function rem(st,curr,mid){
            if(curr===mid){
                st.pop()
                return
            }
            const top = st.pop()
            rem(st,curr+1,mid)
            st.push(top)
        }
       rem(st,0,mid)       
    }
}
const st = new Stack()
st.push(10)
st.push(20)
st.push(30)
st.display()
delMidElt(st)
st.display()

