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
    //BFS
    levelOrder(){
      const queue = []
      queue.push(this.root)
      while(queue.length){
        let curr = queue.shift()
        console.log(curr.value);       
        if(curr.left){
            queue.push(curr.left)
        }
        if(curr.right){
            queue.push(curr.right)
        }
      }
    }
}
const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
console.log(bst.root);
console.log("Is it Empty "+bst.isEmpty());
bst.levelOrder()