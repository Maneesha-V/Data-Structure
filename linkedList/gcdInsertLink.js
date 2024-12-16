class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
class Linkedlist{
    constructor(){
        this.head = null
    }
    display(){
        if(!this.head){
            console.log("Empty");           
        }else{
            let curr = this.head
            let listItem = ''
            while(curr){
                listItem += `${curr.val} `
                curr = curr.next
            }
            console.log(listItem);            
        }
    }
    append(value){
        const node = new ListNode(value)
        if(!this.head){
            this.head = node
        }else{
            let curr = this.head
            while(curr.next!==null){
                curr = curr.next
            }
            curr.next = node
        }
    }
    gcd(a,b){
        while(b!==0){
            let temp = b
            b = a%b
            a = temp
        }
        return a
    }
    insertGCD(){
        let curr = this.head
        while(curr && curr.next!==null){
            const gcdVal = this.gcd(curr.val,curr.next.val)      
            const node = new ListNode(gcdVal)
            node.next = curr.next
            curr.next = node
            curr = node.next
        }
    }
}

const list = new Linkedlist()
list.append(18)
list.append(6)
list.append(10)
list.append(3)
list.display()
list.insertGCD();
list.display()