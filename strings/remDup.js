let str ="haaii hello"
function remDupInStr(str){
    let charObj={}
    let res=''
    for(let char of str){
        if(!charObj[char]){
            charObj[char]=true
            res+=char
        }
    }
    return res
}
console.log(remDupInStr(str));
