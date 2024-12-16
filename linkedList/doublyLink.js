class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    display() {
        if (!this.head) {
            console.log("Empty");
        } else {
            let curr = this.head;
            let listItem = '';
            while (curr !== null) {
                listItem += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listItem);
        }
    }

    append(value) {
        const node = new Node(value);

        if (!this.head) {    
            this.head = node;
        } else {
            let curr = this.head;
            while (curr.next !== null) {
                curr = curr.next;
            }
            curr.next = node;
            node.prev = curr;
        }
        this.size++;  
    }
}

const list = new LinkList();
list.append(10);
list.append(20);
list.append(30);
list.append(30);
list.display();
