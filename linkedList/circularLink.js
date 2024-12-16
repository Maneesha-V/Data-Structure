class Node{
    constructor(value){
        this.value = value 
        this.next = null
    }
}
class CircularList{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    display(){
        if(this.isEmpty()){
            console.log("Empty");           
        }else{
            let curr = this.head
            let listItem = ''            
            do{
                listItem += `${curr.value} `
                curr = curr.next
            }while(curr !== this.head)
            console.log(listItem); 
        }              
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            node.next = this.head
        }else{
            let curr = this.head
            while(curr.next !== this.head){
                curr = curr.next
            }
            curr.next = node
            node.next = this.head
        }
        this.size++
    }
}
const link = new CircularList()
link.append(10)
link.append(20)
link.append(30)
link.display()