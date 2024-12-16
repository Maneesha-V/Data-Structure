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
    insert(x){
        const node = new Node(x)
        if(this.root === null){
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
            if(root.right === null){
                root.right = node
            }else{
                this.insertValue(root.right,node)
            }
        }
    }
    inOrder(root){
        if(root === null){
            return null
        }else{
            this.inOrder(root.left)
            if(this.isPrime(root.value)){
                console.log(root.value);               
            }        
            this.inOrder(root.right)
        }
    }
    isPrime(value){
        if(value<=1) return false 
        for(let i=2;i<=Math.sqrt(value);i++){
            if(value%i===0){
                return false
            }
        }
        return true
    }
}
const tree = new Tree()
tree.insert(10)
tree.insert(3)
tree.insert(5)
tree.insert(4)
tree.insert(7)
tree.insert(11)
tree.insert(13)
tree.inOrder(tree.root);

