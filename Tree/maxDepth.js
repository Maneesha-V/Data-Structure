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
    insert(x){
        const node = new Node(x)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertValue(this.root,node)
        }
    }
    insertValue(root,node){
        if(node.value<root.value){
            if(root.left === null){
                root.left = node
            }else{
                this.insertValue(root.left,node)
            }
        }else{
            if(root.right === null){
                root.right = node
            }else{
                this.insertValue(root.right,node)
            }
        }
    }
    maxDepth(root){
       if(!root) return 0
       const leftDepth = this.maxDepth(root.left)
       const rightDepth = this.maxDepth(root.right)
       return 1 + Math.max(leftDepth,rightDepth)
    }
    
}
const bst = new BST()
bst.insert(10)
bst.insert(15)
bst.insert(20)
bst.insert(17)
bst.insert(5)
console.log("Max depth in binary tree "+bst.maxDepth(bst.root))