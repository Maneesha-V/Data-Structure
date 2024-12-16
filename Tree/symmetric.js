class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }
    isSymmetric(){
        if(!this.root) return true
        return this.isMirror(this.root.left,this.root.right)
    }
    isMirror(left,right){
        if(!left && !right) return true
        if(!left || !right) return false
        if(left.value !== right.value) return false
        return (this.isMirror(left.left,right.right) && this.isMirror(left.right,right.left))
    }
}
const tree = new BST()
tree.root = new Node(1)
tree.root.left = new Node(2)
tree.root.right = new Node(2)
tree.root.left.left = new Node(3)
tree.root.left.right = new Node(4)
tree.root.right.left = new Node(4)
tree.root.right.right = new Node(3)
console.log("Is this tree is symmetric "+tree.isSymmetric());

