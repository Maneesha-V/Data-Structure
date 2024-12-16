//Min-Heap (where the smallest value has the highest priority)
class PriorityQueue{
    constructor(){
        this.heap=[]
    }
    getParentIndex(index){
        return Math.floor((index-1)/2)
    }
    getLeftChild(index){
        return 2*index+1
    }
    getRightChild(index){
        return 2*index+2
    }
    swap(index1,index2){
        [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
    }
    enqueue(value,priority){
        let node = {value,priority}
        this.heap.push(node)
        this.bubbleUp()
    }
    dequeue(){
        if(this.heap.length===0) return null
        let root = this.heap[0]
        let lastNode = this.heap.pop()
        if(this.heap.length>0){
            this.heap[0]=lastNode
            this.bubbleDown()
        }
        return root
    }
    bubbleUp(){
        let index = this.heap.length-1
        while(index>0){
            let parentIndex = this.getParentIndex(index)
            if(this.heap[index].priority>=this.heap[parentIndex].priority){
                break;
            }
            this.swap(index,parentIndex)
            index = parentIndex
        }
    }
     bubbleDown(){
        let index = 0
        while(true){
            const left = this.getLeftChild(index)
            const right = this.getRightChild(index)
            let smallIndex = index

            if(left<this.heap.length && this.heap[left].priority<this.heap[smallIndex].priority){
                smallIndex = left
            }
            if(right<this.heap.length && this.heap[right].priority<this.heap[smallIndex].priority){
                smallIndex = right
            }
            if(smallIndex==index){
                break;
            }
            this.swap(index,smallIndex)
            index = smallIndex
        }
    }
    peek(){
        return this.heap.length > 0 ? this.heap[0] : null
    }
    isEmpty(){
        return this.heap.length===0
    }
    display(){
        if(this.isEmpty()){
            console.log("Empty");           
        }else{
            console.log(this.heap);            
        }
    }
}
const pq = new PriorityQueue()
pq.enqueue("Task 1", 3);
pq.enqueue("Task 2", 1); 
pq.enqueue("Task 3", 2);
pq.display()
console.log(pq.peek());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());


//Max-Heap (where the highest value has the highest priority):
// class PriorityQueue{
//     constructor(){
//         this.heap=[]
//     }
//     isEmpty(){
//         return this.heap.length===0
//     }
//     display(){
//         if(this.isEmpty()){
//             console.log("Empty");           
//         }else{
//             console.log(this.heap);            
//         }
//     }
//     getParentIndex(index){
//         return Math.floor((index-1)/2)
//     }
//     getLeftChild(index){
//         return 2*index+1
//     }
//     getRightChild(index){
//         return 2*index+2
//     }
//     swap(index1,index2){
//         [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]]
//     }
//     enqueue(value,priority){
//         const node = {value,priority}
//         this.heap.push(node)
//         this.bubbleUp()
//     }
//     dequeue(){
//         if(this.isEmpty()) return null
//         let root = this.heap[0]
//         let lastNode = this.heap.pop()
//         if(this.heap.length>0){
//             this.heap[0]=lastNode
//             this.bubbleDown()
//         }
//        return root 
//     }
//     bubbleUp(){
//         let index=this.heap.length-1
//         while(index>0){
//             const parentIndex = this.getParentIndex(index)
//             if(this.heap[index].priority <= this.heap[parentIndex].priority){
//                 break;
//             }
//             this.swap(index,parentIndex)
//             index=parentIndex
//         }
//     }
//     bubbleDown(){
//         let index = 0
//         while(true){
//             let left = this.getLeftChild(index)
//             let right = this.getRightChild(index)
//             let smallIndex = index
//             if(left<this.heap.length && this.heap[left].priority>this.heap[smallIndex].priority){
//                 smallIndex=left
//             }
//             if(right<this.heap.length && this.heap[right].priority>this.heap[smallIndex].priority){
//                 smallIndex=right
//             }
//             if(smallIndex!==index){
//                 this.swap(index,smallIndex)
//                 index=smallIndex
//             }else{
//                 break;
//             }
//         }
//     }
// }
// const pq = new PriorityQueue()
// pq.enqueue('A',4)
// pq.enqueue('B',2)
// pq.enqueue('C',2)
// pq.display()
// console.log(pq.dequeue());
// console.log(pq.dequeue());
// console.log(pq.dequeue());