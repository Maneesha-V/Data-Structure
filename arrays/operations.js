//pop
function remEltEnd(nums){
    nums.length = nums.length-1
    return nums
}
//push
function addEltEnd(nums,val){
    nums.length = nums.length+1
    nums[nums.length-1]=val
    return nums
}
//unshift
function addEltBeg(nums,val){
    nums.length = nums.length+1
    for(let i = 0;i<nums.length;i++){
        nums[nums.length-1-i]=nums[nums.length-2-i]
    }
    nums[0]=val
    return nums
}
//shift
function remEltBeg(nums){
    for(let i = 0;i<nums.length;i++){
        nums[i]=nums[i+1]
    }
    nums.length = nums.length-1
    return nums
}

console.log(remEltBeg([99,20,35,64]));