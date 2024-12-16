class MinHeap{
    constructor(){
        this.heap=[]
    }
    getParentIndex(index){
        return Math.floor((index-1)/2)
    }
    getLeftChildIndex(index){
        return 2*index+1
    }
    getRightChildIndex(index){
        return 2*index+2
    }
    swap(index1,index2){
        [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]]
    }
    insert(x){
        this.heap.push(x)
        this.heapifyUp()
    }
    remove(){
        if(this.heap.length === 0) return null
        const min = this.heap[0]
        const last = this.heap.pop()
        if(this.heap.length>0){
            this.heap[0] = last
            this.heapifyDown()
        }
        return min
    }
    heapifyUp(){
        let index =this.heap.length-1
        while(index>0){
            let parentIndex = this.getParentIndex(index)
            if(this.heap[index]<this.heap[parentIndex]){
                this.swap(index,parentIndex)
                index = parentIndex
            }else{
                break;
            }
        }
    }
    heapifyDown(){
        let index =0
        while(this.getLeftChildIndex(index)<this.heap.length){
            const left = this.getLeftChildIndex(index)
            const right = this.getRightChildIndex(index)
            let larg = left
            if(this.heap[right]<this.heap[left]){
                larg = right
            }
            if(this.heap[larg]<this.heap[index]){
                this.swap(index,larg)
                index = larg
            }else{
                break;
            }
        }
    }
}
const heap = new MinHeap()
heap.insert(10)
heap.insert(15)
heap.insert(20)
heap.insert(17)
heap.insert(8)
console.log(heap.heap);
console.log(heap.remove());
console.log(heap.heap);