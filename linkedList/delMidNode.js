class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
function display(head){
    let curr = head
    let listItem=''
    while(curr!==null){
        listItem += `${curr.val} `
        curr = curr.next
    }
    console.log(listItem);   
}
function middle(head){
    if(!head || !head.next){
        return null
    }
    let slow = head
    let fast = head
    let prev = null
    while(fast && fast.next){
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }
    prev.next = slow.next
    return head
}
const node4 = new ListNode(1);
const node3 = new ListNode(2, node4);
const node2 = new ListNode(3, node3);
const node1 = new ListNode(4, node2);
const head = node1
display(head)
console.log(middle(head));
display(head)
