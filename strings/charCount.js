let str="maneesha"
function charCount(str){
    let chCount={}
    for(let i=0;i<str.length;i++){
        let ch = str[i]
        if(chCount[ch]){
            chCount[ch]++
        }else{
            chCount[ch]=1
        }
    }
    return chCount
}
console.log(charCount(str));
