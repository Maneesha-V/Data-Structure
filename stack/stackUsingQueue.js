//Build stack using queue
// class StackUsingSingleQueue{
//     constructor(){
//         this.queue=[]
//     }
//     isEmpty(){
//         return this.queue.length===0
//     }
//     display(){
//         console.log(this.queue);        
//     }
//     push(value){    //O(n^2)
//         this.queue.push(value)
//         let size = this.queue.length
//         while(size>1){
//             this.queue.push(this.queue.shift())
//             size--
//         }
//     }
//     pop(){      //O(n)
//         return this.queue.shift()
//     }
//     peek(){     //O(1)
//         return this.queue[0]
//     }

// }
// const sq = new StackUsingSingleQueue()
// sq.push(10)
// sq.push(20)
// sq.push(30)
// sq.display()
// console.log(sq.pop());
// console.log(sq.peek());

class StackUsingTwoQueues{
    constructor(){
        this.q1=[]
        this.q2=[]
    }
    push(x){        //O(1)
        this.q1.push(x)
    }
    pop(){          //O(n)
        while(this.q1.length>1){
            this.q2.push(this.q1.shift())
        }
        const poppedValue = this.q1.shift()
        const temp = this.q1
        this.q1 = this.q2
        this.q2 = temp
        return poppedValue
    }
    peek(){         //O(n)
        while(this.q1.length>1){
            this.q2.push(this.q1.shift())
        }
        const topValue = this.q1[0]
        this.q2.push(this.q1.shift())
        const temp = this.q1
        this.q1 = this.q2
        this.q2 = temp
        return topValue
    }
}
const sq = new StackUsingTwoQueues()
sq.push(10)
sq.push(20)
sq.push(30)
sq.push(40)
console.log(sq.peek());
console.log(sq.pop());
console.log(sq.peek());
console.log(sq.pop());