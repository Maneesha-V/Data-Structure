function binarySearch(nums,t){
    return search(nums,t,0,nums.length-1)
}
function search(nums,t,l,r){
    if(l>r){
        return null
    }
    let mid = Math.floor((l+r)/2)
    if(nums[mid]===t){
        return mid
    }
    if(t<nums[mid]){
        return search(nums,t,0,mid-1)
    }else{
        return search(nums,t,mid+1,r)
    }
}
console.log(binarySearch([1,2,3,4,5,6],4));
