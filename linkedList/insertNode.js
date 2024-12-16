class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    display() {
        if (this.isEmpty()) {
            console.log("empty")
        } else {
            let curr = this.head
            let listValue = '';
            while (curr) {
                listValue += `${curr.value} `
                curr = curr.next
            }
            console.log(listValue)
        }
    }
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            curr.next = node
        }
        this.size++
    }
    inserAfter(x, value) {
        if (this.isEmpty()) {
            return null
        } else {
            const node = new Node(value)
            let curr = this.head
            while (curr.value !== x) {
                curr = curr.next
            }
            node.next = curr.next
            curr.next = node
            this.size++
        }
    }
    insertBefore(x, value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.size++
            return;
        }
        if (this.head.value === x) {
            node.next = this.head
            this.head = node
            this.size++
            return;
        }
        let curr = this.head
        while (curr.next) {
            if (curr.next.value === x) {
                node.next = curr.next
                curr.next = node
                this.size++
                return;
            }
            curr = curr.next
        }

    }
}
const link = new LinkedList()
link.append(5)
link.append(10)
link.append(15)
link.append(20)
link.display()
link.inserAfter(15, 18)
link.display()
link.insertBefore(15, 14)
link.display()