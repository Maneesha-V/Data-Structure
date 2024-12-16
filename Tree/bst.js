class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySearchTree{
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
            this.insertValue(node,this.root)
        }
    }
    insertValue(node,root){
        if(node.value<root.value){
            if(root.left===null){
                root.left = node
            }else{
                this.insertValue(node,root.left)
            }
        }else{
            if(root.right===null){
                root.right = node
            }else{
                this.insertValue(node,root.right)
            }
        }
    }
    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value===value){
                return true
            }else if(value<root.value){
                return this.search(root.left,value)
            }else {
                return this.search(root.right,value)
            }
        }
    }
}
const bst = new BinarySearchTree()
console.log("Tree is empty "+bst.isEmpty());
bst.insert(10)
bst.insert(20)
bst.insert(30)
bst.insert(4)
bst.insert(5)
console.log("Tree is empty "+bst.isEmpty());
console.log(bst.search(bst.root,15));
