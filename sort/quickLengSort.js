let arr=[8,3,7,1,0,10,2]
function quickSort(arr,lb,ub){
   if(lb<ub){
       let loc = partition(arr,lb,ub)
       quickSort(arr,lb,loc-1)
       quickSort(arr,loc+1,ub)
   }
}
function partition(arr,lb,ub){
    let pivot = arr[lb]
    let start = lb
    let end = ub
    let temp
    while(start<end){
        while(start < arr.length && arr[start]<=pivot){
            start++
        }
        while(arr[end]>pivot){
            end--
        }
        if(start<end){
            temp = arr[start]
            arr[start]=arr[end]
            arr[end]=temp
        }
    }
    temp = arr[end]
    arr[end] = arr[lb]
    arr[lb] = temp
    return end
}
quickSort(arr,0,arr.length-1)
console.log(arr)