class Node{
    constructor(value){
        this.value = value
        this.next = null
    }       
}
class LinkList{
    constructor(){
        this.head = null
        this.size = 0
    }
    size(){
        return this.size
    }
    isEmpty(){
        return this.head === null
    }
    display(){
        if(this.isEmpty()){
            console.log("Empty");           
        }else{
            let curr = this.head
            let listItem = ''
            while(curr!==null){
                listItem += `${curr.value} `
                curr = curr.next
            }
            console.log(listItem);            
        }
    }
    push(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    pop(){
        if(this.isEmpty()){
            return "Emptyyy"
        }else{
            let delNode = this.head
            this.head = delNode.next
            return delNode.value
        }
    }
    peek(){
        if(this.isEmpty()){
            return "Emptyyy"
        }else{
            return this.head.value
        }
    }
}
const link = new LinkList()
link.push(20)
link.push(50)
link.push(60)
link.display()
console.log(link.pop());
link.display()
console.log("Top element "+link.peek());