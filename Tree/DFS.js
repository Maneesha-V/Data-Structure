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
            this.insertValue(this.root,node)
        }
    }
    insertValue(root,node){
        if(node.value < root.value){
            if(root.left===null){
                root.left = node
            }else{
                this.insertValue(root.left,node)
            }
        }else{
            if(root.right===null){
                root.right = node
            }else{
                this.insertValue(root.right,node)
            }
        }
    }
    //Traversals
    preOrder(root){
        if(root){
            console.log(root.value);   
            this.preOrder(root.left)  
            this.preOrder(root.right)      
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);           
        }
    }
}
const bst = new BinarySearchTree()
console.log(bst.isEmpty())
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
console.log(bst.root);
console.log(bst.isEmpty())
// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
bst.postOrder(bst.root)