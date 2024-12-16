function sort(arr){
    const n = arr.length
    for(let i = Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }
    for(let i=n-1;i>0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]]
        heapify(arr,i,0)
    }
    return arr
}
function heapify(arr,n,i){
    let larg = i
    const left = 2*i+1
    const right = 2*i+2
    while(left<n && arr[left]>arr[larg]){
        larg = left
    }
    while(right<n && arr[right]>arr[larg]){
        larg = right
    }
    if(larg!==i){
        [arr[i],arr[larg]] = [arr[larg],arr[i]]
        heapify(arr,n,larg)
    }
}
console.log(sort([15,5,20,1,17,10,30]));
