class Node {
    constructor(value){
        this.value = value
        this.next = null;
    }
}
class SinglyLInkedList{
    constructor(){
        this.head  = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    display(){
        if(this.isEmpty()){
            console.log("Empty")
        }else{
            let curr = this.head
            let listValue = ''
            while(curr){
                listValue += `${curr.value} `
                curr = curr.next
            }
            console.log(listValue)
        }
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
           let curr = this.head
           while(curr.next !== null){
               curr = curr.next
           }
           curr.next = node
        }
        this.size++
    }
    remDuplicates(){
        let curr = this.head
        while(curr && curr.next ){
            if(curr.value === curr.next.value){
                curr.next = curr.next.next
            }else{
                curr = curr.next
            }
        }
    }
}
const link = new SinglyLInkedList()
link.append(10)
link.append(10)
link.append(20)
link.append(20)
link.display()
link.remDuplicates()
link.display()

