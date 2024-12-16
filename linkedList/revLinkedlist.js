class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }
    prepend(value){
        const node = new Node(value)
        console.log("node",node);        
        if(this.isEmpty()){
            this.head = node
            this.size++;
        }else{
            node.next = this.head
            this.head = node;
            this.size++;
        }
    }
    insert(value,index){
        if(index<0 || index > this.size){
            return -1;
        }
        if(index===0){
            return this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++;
        }

    }
    reverse(){
        if(this.isEmpty()){
            return null;
        }else{
            let prev = null;
            let curr = this.head;
            while(curr){
                let next = curr.next
                curr.next = prev
                prev = curr
                curr = next
            }
            this.head = prev
        }
    }
    displayAll(){
        if(this.isEmpty()){
            console.log("List is empty");           
        }else{
            let curr = this.head;
            let listValue = '';
            while(curr){
                listValue += `${curr.value} `
                curr = curr.next
            }
            console.log(listValue);            
        }
    }
}
const link = new LinkedList();
// console.log(link.prepend(5));
// console.log(link.prepend(10));
link.displayAll()
link.insert(10,0);
link.insert(20,1);
link.insert(30,2);
link.insert(40,3);
link.insert(25,2);
link.displayAll()
link.reverse()
link.displayAll()