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
        return this.root == null
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
    minValue(root){
        if(!root.left){
            console.log("MIn value "+root.value);            
        }else{
            this.minValue(root.left)
        }
    }
    maxValue(root){
        if(!root.right){
            console.log("Max value "+root.value);           
        }else{
            this.maxValue(root.right)
        }
    }
}
const bst = new BinarySearchTree()
console.log("Is tree empty "+bst.isEmpty());
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
console.log("Is tree empty "+bst.isEmpty());
bst.minValue(bst.root)
bst.maxValue(bst.root)