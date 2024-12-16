class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class Tree{
    constructor(){
        this.root = null
    }
    isIdentical(tree1,tree2){
        if(!tree1 && !tree2) return true
        if(!tree1 || !tree2) return false
        if(tree1.value !== tree2.value) return false
        return (this.isIdentical(tree1.left,tree2.left) && this.isIdentical(tree1.right,tree2.right))
    }
}
const root1 = new Node(1)
root1.left = new Node(2)
root1.right = new Node(3)
const root2 = new Node(1)
root2.left = new Node(2)
root2.right = new Node(3)
const tree = new Tree()
console.log(tree.isIdentical(root1,root2));
root2.right.value = 4
console.log(tree.isIdentical(root1,root2));
