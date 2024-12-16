class MaxHeap{
    constructor(){
        this.heap = []
    }
    peek(){
        return this.heap.length > 0 ? this.heap[0] : null
    }
    getParentIndex(index){
        return Math.floor((index-1)/2)
    }
    leftChildIndex(index){
        return 2*index+1
    }
    rightChildIndex(index){
        return 2*index+2
    }
    swap(index1,index2){
        return [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]]
    }
    insert(x){
        this.heap.push(x)
        this.heapifyUp()
    }
    remove(){
        if(this.heap.length === 0) return null
        const max = this.heap[0]
        const last = this.heap.pop()
        if(this.heap.length>0){
            this.heap[0] = last
            this.heapifyDown()
        }
        return max
    }
    heapifyUp(){
        let index = this.heap.length-1
        let parentIndex = this.getParentIndex(index)
        while(index>0){
            if(this.heap[index]>this.heap[parentIndex]){
                this.swap(index,parentIndex)     
                index = parentIndex      
            }else{
                break;
            }            
        }
    }
    heapifyDown(){
        let index = 0
        while(this.leftChildIndex(index)<this.heap.length){
            const left = this.leftChildIndex(index)
            const right = this.rightChildIndex(index)
            let larg = left
            if(right<this.heap.length && this.heap[right]>this.heap[left]){
                larg = right
            }
            if(this.heap[index]<this.heap[larg]){
                this.swap(index,larg)
                index = larg
            }else{
                break;
            }
        }
    }
}
const heap = new MaxHeap()
heap.insert(10)
heap.insert(15)
heap.insert(20)
heap.insert(17)
heap.insert(8)
console.log(heap.heap);
console.log("Max heap "+heap.remove());
console.log(heap.heap);
console.log("Max heap "+heap.remove());
console.log(heap.peek());
