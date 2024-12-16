function flattenArray(arr) {
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            let flatArray = flattenArray(arr[i])
            for(let j=0;j<flatArray.length;j++){
                result[result.length]=flatArray[j]
            }
        }else{
            result[result.length]=arr[i]
        }   
    }
    return result
}
console.log(flattenArray([2, [3, [4, [5, 6]]]]))