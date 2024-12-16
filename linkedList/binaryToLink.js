class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class Linkedlist{
    constructor(){
        this.head = null
        this.size = 0
    }
    display(){
        if(this.size===0){
            console.log("Empty");            
        }else{
            let curr = this.head
            let listItem=''
            while(curr){
                listItem += `${curr.value} `
                curr=curr.next
            }
            console.log(listItem);           
        }
    }
    append(value){
        const node = new Node(value)       
        if(this.size===0){
            this.head = node       
            this.size++    
        }else{
            let curr = this.head
            while(curr.next!==null){
                curr=curr.next           
            }
            curr.next = node
            node.next =null
            this.size++
        }
    }
    getDecimalValue() {
        let curr = this.head
        let num = 0
        while (curr !== null) {
            num = (num * 2) + curr.value
            curr = curr.next
        }
        return num
    }
}
let arr = [1,0,1]
const link = new Linkedlist()
for(let i=0;i<arr.length;i++){
    link.append(arr[i])
}
link.display()
console.log(link.getDecimalValue());
