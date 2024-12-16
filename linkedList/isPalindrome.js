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
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.size++;
        }else{
            let prev = this.head;
            while(prev.next!==null){
                prev = prev.next
            }
            prev.next = node
            this.size++;          
        }
    }
    displayAll(){
        if(this.isEmpty()){
            console.log("Empty")
        }else{
            let prev = this.head
            let listValue = ''
            while(prev){             
                listValue += `${prev.value} `
                prev = prev.next
            }
            console.log(listValue)
        }
    }
    isPlaindrome(){
        if(!this.head || !this.head.next){
            return true
        }
        //middle linkedlist
        let slow = this.head
        let fast = this.head
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        // return slow
        //reverse second half
        let prev = null
        while(slow){
            let next = slow.next
            slow.next = prev
            prev = slow
            slow = next
        }
        // return prev
        //Compare the first half and the reversed second half
        let left = this.head
        let right = prev
        while(right){
            if(left.value!==right.value){
                return false
            }
            left = left.next
            right = right.next
        }
        return true
    }
}
const list = new LinkedList();
list.append(10)
list.append(20)
list.append(30)
list.displayAll()
console.log(list.isPlaindrome());
