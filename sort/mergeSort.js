let arr = [8, 20, -2, -4, 6]
function sort(arr){
    if(arr.length<2) return arr
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return merge(sort(left),sort(right))
}
function merge(left,right){
    let result = []
    while(left.length && right.length){
        if(left[0]<=right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }
    return [...result,...left,...right]
}
console.log(sort(arr));
