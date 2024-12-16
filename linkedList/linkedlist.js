// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }
// class LinkedList {
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }
//     isEmpty(){
//         return this.size === 0;
//     }
//     getSize(){
//         return this.size;
//     }
//     prepend(value){
//         const node = new Node(value);
//         if(this.isEmpty()){
//             this.head = node;
//         }else {
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++;
//     }
//     displayAll(){
//         if(this.isEmpty()){
//             console.log("Empty");            
//         }else{
//             let curr = this.head;
//             let listValues = '';
//             while(curr){
//                 listValues += `${curr.value} `
//                 curr = curr.next;               
//             }
//             console.log(listValues);            
//         }
//     }
// }

// const list =  new LinkedList();
// console.log("list",list);
// list.displayAll();
// list.prepend(10);
// console.log("list",list);
// list.displayAll();
// list.prepend(20);
// list.prepend(30);
// console.log("list",list);
// list.displayAll()
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.size =0;
    }
    isEmpty(){
        return this.size === 0;
    }
    getSize(){
        return this.size;
    }
    //O(1)
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;           
        }else{
            node.next = this.head
            this.head = node;  
        }
        this.size++;
    }
    //O(n)
    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    insert(value,index){
        if(index<0 || index>this.size){
            return
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
            prev.next=node
            this.size++;
        }
    }
    removeFrom(index){
        if(index<0 || index>=this.size){
            return null;
        }
        let removeNode;
        //O(1)
        if(index===0){
            removeNode = this.head;
            this.head = this.head.next;
        }
        //O(n)
        else {
            let prev = this.head;
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--;
        return removeNode.value;
    }
    removeValue(value){
        if(this.isEmpty()){
            return null;
        }
        //O(1)
        if(this.head.value === value){
            this.head = this.head.next
            this.size--;
            return value
        }
        //O(n)
        else{
            let prev = this.head;
            console.log("prev",prev);
            
            while(prev.next && prev.next.value!==value){
                prev=prev.next
            }
            if(prev.next){
                let removeNode = prev.next
                prev.next = removeNode.next
                this.size--;
                return value
            }
            return null;
        }       
    }
    search(value){
        if(this.isEmpty()){
            return -1;
        }
        let curr = this.head;
        let i=0;
        while(curr){
            if(curr.value === value){
                return i;
            }else{
                curr = curr.next;
                i++;
            }
        }
        return -1;
    }
    displayAll(){
        if(this.isEmpty()){
            console.log("Empty");
        }else{
            let curr = this.head;
            let list='';
            while(curr){
                list += `${curr.value} `
                curr = curr.next
            }
            console.log("list",list);           
        }
    }
}
const link = new LinkedList()
link.displayAll();
link.append(10)
link.displayAll()
link.append(20)
link.append(30)
link.displayAll()
link.insert(5,0)
link.insert(40,3)
link.displayAll()
console.log((link.search(40)));
// console.log(link.removeFrom(3));
// link.displayAll()
// console.log(link.removeValue(20));
// link.displayAll()