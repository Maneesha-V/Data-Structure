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
    if(root.left === null){
        return root.value      
    }else{
        this.minValue(root.left)
    }
   }
   levelOrder(){
    const queue=[]
    queue.push(this.root)
    while(queue.length){
        let curr = queue.shift()
        console.log(curr.value)
        if(curr.left){
            queue.push(curr.left)
        }
        if(curr.right){
            queue.push(curr.right)
        }
    }
   }
   delete(value){
    this.root = this.deleteNode(this.root,value)
   }
   deleteNode(root,value){
    if(root === null){
        return root
    }
    if(value<root.value){
        root.left = this.deleteNode(root.left,value)
    }else if(value>root.value){
        root.right = this.deleteNode(root.right,value)
    }else{
        if(!root.left && !root.right){
            return null
        }
        if(!root.left){
            return root.right
        }else if(!root.right){ 
            return root.left
        }
        let minNode = this.minValue(root.right)
        root.value = minNode
        root.right = this.deleteNode(root.right,minNode)
    }
    return root
   }
}
const bst = new BinarySearchTree()
console.log("Is tree empty "+bst.isEmpty());
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
console.log("Before Delete");
bst.levelOrder()
bst.delete(5)
console.log("After Delete");
bst.levelOrder()
